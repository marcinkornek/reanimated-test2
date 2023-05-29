import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const Animation1Screen = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
      ],
    };
  });

  return (
    <View>
      <Text>Animation1</Text>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() =>
          (offset.value = withTiming(Math.random() * 255, {
            duration: 100,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }))
        }
        title="Move"
      />
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
