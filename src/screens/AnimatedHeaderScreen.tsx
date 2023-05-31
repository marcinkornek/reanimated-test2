import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const data = Array.from({length: 20}).map((_, i) => ({
  id: i,
  title: `title ${i + 1}`,
}));

export const AnimatedHeaderScreen = () => {
  const renderItem = ({item}: {item: (typeof data)[0]}) => {
    return (
      <View style={styles.listItemContainer}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const renderHeader = () => (
    <Text style={styles.headerText}>AnimatedHeaderScreen</Text>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={renderHeader()}
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
    padding: 20,
  },
});
