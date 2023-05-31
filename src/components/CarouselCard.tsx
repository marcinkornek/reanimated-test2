import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import {CARD_HEIGHT, CARD_WIDTH} from '../screens/CarouselScreen';

type CarouselCardProps = {
  backgroundColor: string;
  index: number;
  text: string;
  offset: Animated.SharedValue<number>;
};
const {width} = Dimensions.get('window');
const RATIO = CARD_WIDTH / width;
const INITIAL_MARGIN = (width - CARD_WIDTH) / 2;

export const CarouselCard = ({
  backgroundColor,
  text,
  index,
  offset,
}: CarouselCardProps) => {
  const offsetValue = useDerivedValue(() => {
    console.log('offset.value', offset.value);

    return INITIAL_MARGIN - offset.value * RATIO;
  });

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      offset.value,
      [
        (index - 1) * width,
        (index - 0.5) * width,
        index * width,
        (index + 0.5) * width,
        (index + 1) * width,
      ],
      [0.8, 0.8, 1, 0.8, 0.8],
    );

    const opacity = interpolate(
      offset.value,
      [
        (index - 1) * width,
        (index - 0.5) * width,
        index * width,
        (index + 0.5) * width,
        (index + 1) * width,
      ],
      [0.5, 0.5, 1, 0.5, 0.5],
    );

    return {
      opacity,
      transform: [
        {
          translateX: offsetValue.value,
        },
        {
          scale,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.tile, {backgroundColor}, animatedStyles]}>
      <Text>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
