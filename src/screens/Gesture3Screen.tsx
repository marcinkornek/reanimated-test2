import React from 'react';
import {StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const ITEM_SIZE = 100;

export const Gesture3Screen = () => {
  const pressed = useSharedValue(false);
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const tapGesture = Gesture.Tap()
    .onBegin(e => {
      console.log('START');
      pressed.value = true;
    })
    .onTouchesCancelled(e => {
      console.log('END');
      pressed.value = false;
    });

  const panGesture = Gesture.Pan()
    .onStart(e => {
      offsetX.value = x.value;
      offsetY.value = y.value;
    })
    .onUpdate(e => {
      x.value = e.translationX + offsetX.value;
      y.value = e.translationY + offsetY.value;
    })
    .onEnd(e => {
      x.value = startingPosition;
      y.value = startingPosition;
    });

  const gestureEventHandler = Gesture.Simultaneous(tapGesture, panGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FEEF86' : '#001972',
    transform: [{translateX: x.value}, {translateY: y.value}],
  }));

  return (
    <GestureDetector gesture={gestureEventHandler}>
      <Animated.View style={[styles.ball, animatedStyle]} />
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: 'plum',
    borderRadius: ITEM_SIZE / 2,
  },
});
