import React from 'react';

import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';

type HeaderTitleProps = {
  title: string;
  showHeader: Animated.SharedValue<boolean>;
};

export const HeaderTitle = ({title, showHeader}: HeaderTitleProps) => {
  const titleAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: showHeader.value ? 0 : 1,
    };
  });

  return (
    <Animated.Text style={[styles.headerText, titleAnimatedStyles]}>
      {title}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  headerText: {
    paddingHorizontal: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
