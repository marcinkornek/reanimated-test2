import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HEADER_HEIGHT = 45;
const data = Array.from({length: 20}).map((_, i) => ({
  id: i,
  title: `title ${i + 1}`,
}));

export const AnimatedHeaderScreen = () => {
  const insets = useSafeAreaInsets();
  const offset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      offset.value = event.contentOffset.y;
    },
  });

  const titleAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value > 15 ? 0 : 1,
    };
  });

  const hiddenHeaderAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value > 15 ? 1 : 0,
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
      AnimatedHeaderScreen
    </Animated.Text>
  );

  const renderHiddenHeader = () => (
    <Animated.View
      style={[
        styles.hiddenHeader,
        {paddingTop: insets.top, height: insets.top + HEADER_HEIGHT},
        hiddenHeaderAnimatedStyles,
      ]}>
      <Text>AnimatedHeaderScreen</Text>
    </Animated.View>
  );

  return (
    <>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader()}
        contentContainerStyle={[
          {
            paddingTop: HEADER_HEIGHT + insets.top,
          },
        ]}
        onScroll={scrollHandler}
      />
      {renderHiddenHeader()}
    </>
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
    padding: 20,
    paddingTop: 0,
  },
  hiddenHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
});
