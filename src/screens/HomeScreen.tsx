import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SCREEN_NAMES} from '../../constants/screenNames';
import {HomeScreenNavigationProps} from '../../types/navigation';

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate(SCREEN_NAMES.ANIMATION1_SCREEN)}>
        <Text>Animation1</Text>
      </Pressable>
    </View>
  );
};
