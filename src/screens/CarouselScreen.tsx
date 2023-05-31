import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import {CarouselCard} from '../components/CarouselCard';

const {width} = Dimensions.get('window');
export const GAP = 20;
export const PADDING = 10;
export const CARD_WIDTH = width / 2 - GAP * 2;
export const CARD_HEIGHT = CARD_WIDTH * 1.5;
const BOTTOM_CARD_WIDTH = width - GAP * 2;

const data = [
  {
    id: 1,
    title: 'first',
    color: 'red',
  },
  {
    id: 2,
    title: 'second',
    color: 'blue',
  },
  {
    id: 3,
    title: 'third',
    color: 'green',
  },
  {
    id: 4,
    title: 'four',
    color: 'orange',
  },
  {
    id: 5,
    title: 'five',
    color: 'yellow',
  },
  {
    id: 6,
    title: 'six',
    color: 'red',
  },
  {
    id: 7,
    title: 'seven',
    color: 'blue',
  },
];

export const CarouselScreen = () => {
  const aref = useAnimatedRef<Animated.ScrollView>();
  const offset = useScrollViewOffset(aref);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
      ],
    };
  });

  const renderBottomCard = React.useCallback(
    (index: number, backgroundColor: string, text: string) => {
      return (
        <View style={styles.bottomCard}>
          <Text>{text}</Text>
        </View>
      );
    },
    [],
  );

  const renderCards = () => {
    return (
      <Animated.View style={[styles.cardContainer, animatedStyles]}>
        {data.map((item, index) => (
          <CarouselCard
            key={index}
            index={index}
            backgroundColor={item.color}
            text={item.title}
            offset={offset}
          />
        ))}
      </Animated.View>
    );
  };
  const renderBottomCards = () => {
    return (
      <View style={styles.bottomCardContainer}>
        {data.map((item, index) =>
          renderBottomCard(index, item.color, item.title),
        )}
      </View>
    );
  };

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      ref={aref}
      scrollEventThrottle={16}>
      <View>
        {renderCards()}
        {renderBottomCards()}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomCard: {
    width: BOTTOM_CARD_WIDTH,
    margin: GAP,
    padding: PADDING,
    borderRadius: 10,
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
  },
  bottomCardContainer: {
    flexDirection: 'row',
  },
});
