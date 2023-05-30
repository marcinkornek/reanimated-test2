import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export const Animation2Screen = () => {
  const rotation = useSharedValue('0deg');

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: rotation.value,
        },
      ],
    };
  });

  const animate = () => {
    rotation.value = withSequence(
      withTiming('-10deg', {duration: 50}),
      withRepeat(withTiming('10deg', {duration: 100}), 6, true),
      withTiming('0deg', {duration: 50}),
    );
  };

  return (
    <View>
      <Text>Animation2</Text>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={animate} title="Move" />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
