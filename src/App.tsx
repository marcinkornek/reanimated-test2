import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';
import {Animation1Screen} from './screens/Animation1Screen';
import {RootStackParamList} from '../types/navigation';
import {SCREEN_NAMES} from '../constants/screenNames';
import {Gesture1Screen} from './screens/Gesture1Screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Gesture2Screen} from './screens/Gesture2Screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREEN_NAMES.GESTURE2_SCREEN}
            component={Gesture2Screen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.HOME_SCREEN}
            component={HomeScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ANIMATION1_SCREEN}
            component={Animation1Screen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.GESTURE1_SCREEN}
            component={Gesture1Screen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
