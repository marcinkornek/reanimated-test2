import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';

export const Gesture1Screen = () => {
  const _handleStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      Alert.alert('Longpress');
    }
  };

    return (
      <LongPressGestureHandler onHandlerStateChange={_handleStateChange}>
        <Text style={styles.buttonText}>Longpress me</Text>
      </LongPressGestureHandler>
    );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
  }
});
