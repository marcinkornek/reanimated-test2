import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const ITEM_WIDTH = 100;
const ITEM_HEIGHT = 100;

export const Gesture2Screen = () => {
  const {width, height} = Dimensions.get('window');
  const [windowHeight, setWindowHeight] = React.useState(0);
  const positionX = useSharedValue((width - ITEM_WIDTH) / 2);
  const positionY = useSharedValue((height - ITEM_HEIGHT) / 2);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const onLayout = (e: any) => {
    setWindowHeight(e.nativeEvent.layout.height);
    positionY.value = e.nativeEvent.layout.height / 2 - ITEM_HEIGHT;
  };

  const panGesture = Gesture.Pan()
    .onStart(e => {
      offsetX.value = positionX.value;
      offsetY.value = positionY.value;
    })
    .onUpdate(e => {
      positionX.value = e.translationX + offsetX.value;
      positionY.value = e.translationY + offsetY.value;
    })
    .onEnd(e => {
      positionX.value = Math.max(
        0,
        Math.min(positionX.value, width - ITEM_WIDTH),
      );
      positionY.value = Math.max(
        0,
        Math.min(positionY.value, windowHeight - ITEM_HEIGHT),
      );
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: positionX.value}, {translateY: positionY.value}],
  }));

  return (
    <View style={styles.container} onLayout={onLayout}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: 'plum',
    borderRadius: 10,
  },
});
