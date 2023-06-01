import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useCollapsibleHeader} from '../hooks/useCollapsibleHeader';

const data = Array.from({length: 20}).map((_, i) => ({
  id: i,
  title: `title ${i + 1}`,
}));

const TITLE = 'AnimatedHeaderV2';

export const AnimatedHeaderV2Screen = () => {
  const {renderHeader: renderTitleHeader, scrollHandler} = useCollapsibleHeader(
    {title: TITLE},
  );
  const [items, setItems] = useState(data);

  const renderItem = ({item}: {item: (typeof data)[0]}) => {
    return (
      <View style={styles.listItemContainer}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const addItemToArray = () => {
    setItems(prevState => {
      return [
        {id: Date.now(), title: `title ${prevState.length + 1}`},
        ...prevState,
      ];
    });
  };

  const renderHeader = () => {
    return (
      <View>
        {renderTitleHeader()}
        <Button title="Add" onPress={addItemToArray} />
      </View>
    );
  };

  return (
    <Animated.FlatList
      data={items}
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
