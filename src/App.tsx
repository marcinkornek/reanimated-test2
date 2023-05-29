import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';
import {Animation1Screen} from './screens/Animation1Screen';
import {RootStackParamList} from '../types/navigation';
import {SCREEN_NAMES} from '../constants/screenNames';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={SCREEN_NAMES.ANIMATION1_SCREEN}
          component={Animation1Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
