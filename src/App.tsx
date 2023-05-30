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
import {Animation2Screen} from './screens/Animation2Screen';
import {Gesture3Screen} from './screens/Gesture3Screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
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
          <Stack.Screen
            name={SCREEN_NAMES.ANIMATION2_SCREEN}
            component={Animation2Screen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.GESTURE2_SCREEN}
            component={Gesture2Screen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.GESTURE3_SCREEN}
            component={Gesture3Screen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
