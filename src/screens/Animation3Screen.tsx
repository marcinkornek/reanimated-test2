import * as React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const Animation3Screen = () => {
  const [items, setItems] = React.useState<Array<any>>([]);

  const renderItem = React.useCallback(
    ({item}: any) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setItems(prevState => prevState.filter((i: number) => i !== item));
        }}>
        <View style={styles.listElementContainer}>
          <Text style={styles.listElementText}>{item}</Text>
        </View>
      </TouchableOpacity>
    ),
    [],
  );

  const onPress = React.useCallback(() => {
    setItems(prevState => {
      return [Date.now(), ...prevState];
    });
  }, []);

  const keyExtractor = React.useCallback((item: any) => {
    return item.toString();
  }, []);

  const renderCell = React.useCallback(
    (props: any) => (
      <Animated.View
        {...props}
        layout={Layout.springify()}
        entering={FadeIn}
        exiting={FadeOut}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Button title="ADD ITEM" onPress={onPress} />
      <AnimatedFlatList
        contentContainerStyle={styles.listContentContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        CellRendererComponent={renderCell}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listElementContainer: {
    height: 100,
    marginVertical: 12,
    backgroundColor: 'red',
  },
  listElementText: {
    color: 'white',
    fontSize: 18,
  },
  listContentContainer: {
    paddingHorizontal: 24,
  },
});
