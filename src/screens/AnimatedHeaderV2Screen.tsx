import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const data = Array.from({length: 20}).map((_, i) => ({
  id: i,
  title: `title ${i + 1}`,
}));

const TITLE = 'AnimatedHeaderV2';

export const AnimatedHeaderV2Screen = () => {
  const navigation = useNavigation();
  const showHeader = useSharedValue(false);

  const showHeaderJS = (show: boolean) => {
    navigation.setOptions({
      headerTitle: show ? TITLE : '',
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

  const renderItem = ({item}: {item: (typeof data)[0]}) => {
    return (
      <View style={styles.listItemContainer}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const renderHeader = () => (
    <Animated.Text style={[styles.headerText, titleAnimatedStyles]}>
      {TITLE}
    </Animated.Text>
  );

  return (
    <Animated.FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={renderHeader()}
      onScroll={scrollHandler}
    />
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
