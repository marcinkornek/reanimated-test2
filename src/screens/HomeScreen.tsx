import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';
import {SCREEN_NAMES} from '../../constants/screenNames';
import {HomeScreenNavigationProps} from '../../types/navigation';

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View>
      <Button
        onPress={() => navigation.navigate(SCREEN_NAMES.ANIMATION1_SCREEN)}
        title="Animation1"
      />
      <Button
        onPress={() => navigation.navigate(SCREEN_NAMES.GESTURE1_SCREEN)}
        title="Gesture1"
      />
      <Button
        onPress={() => navigation.navigate(SCREEN_NAMES.GESTURE2_SCREEN)}
        title="Gesture2"
      />
      <Button
        onPress={() => navigation.navigate(SCREEN_NAMES.ANIMATION2_SCREEN)}
        title="Animation2"
      />
      <Button
        onPress={() => navigation.navigate(SCREEN_NAMES.GESTURE3_SCREEN)}
        title="Gesture3"
      />
      <Button
        onPress={() => navigation.navigate(SCREEN_NAMES.ANIMATION3_SCREEN)}
        title="Animation3"
      />
      <Button
        onPress={() => navigation.navigate(SCREEN_NAMES.CAROUSEL_SCREEN)}
        title="CarouselScreen"
      />
      <Button
        onPress={() => navigation.navigate(SCREEN_NAMES.ANIMATED_HEADER_SCREEN)}
        title="AnimatedHeaderScreen"
      />
      <Button
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.ANIMATED_HEADER_V2_SCREEN)
        }
        title="AnimatedHeaderV2Screen"
      />
    </View>
  );
};
