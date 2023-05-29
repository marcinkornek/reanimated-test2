import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants/screenNames';

export type RootStackParamList = {
  [SCREEN_NAMES.HOME_SCREEN]: undefined;
  [SCREEN_NAMES.ANIMATION1_SCREEN]: undefined;
};

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  SCREEN_NAMES.HOME_SCREEN
>;
