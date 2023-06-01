import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type UseCollapsibleHeaderProps = {
  title: string;
};

export const useCollapsibleHeader = ({title}: UseCollapsibleHeaderProps) => {
  const navigation = useNavigation();
  const showHeader = useSharedValue(false);

  const showHeaderJS = (show: boolean) => {
    navigation.setOptions({
      headerTitle: show ? title : '',
      headerStyle: show
        ? undefined
        : {
            backgroundColor: 'rgb(242, 242, 242)',
          },
      headerShadowVisible: show,
    });
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const show = event.contentOffset.y > 38;
      showHeader.value = show;

      runOnJS(showHeaderJS)(show);
    },
  });

  const titleAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: showHeader.value ? 0 : 1,
    };
  });

  const renderHeader = () => {
    return (
      <Animated.Text style={[styles.headerText, titleAnimatedStyles]}>
        {title}
      </Animated.Text>
    );
  };

  return {
    renderHeader,
    scrollHandler,
  };
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
