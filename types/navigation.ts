import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants/screenNames';

export type RootStackParamList = {
  [SCREEN_NAMES.HOME_SCREEN]: undefined;
  [SCREEN_NAMES.ANIMATION1_SCREEN]: undefined;
  [SCREEN_NAMES.GESTURE1_SCREEN]: undefined;
  [SCREEN_NAMES.GESTURE2_SCREEN]: undefined;
  [SCREEN_NAMES.ANIMATION2_SCREEN]: undefined;
  [SCREEN_NAMES.GESTURE3_SCREEN]: undefined;
  [SCREEN_NAMES.ANIMATION3_SCREEN]: undefined;
  [SCREEN_NAMES.CAROUSEL_SCREEN]: undefined;
  [SCREEN_NAMES.ANIMATED_HEADER_SCREEN]: undefined;
  [SCREEN_NAMES.ANIMATED_HEADER_V2_SCREEN]: undefined;
};

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  SCREEN_NAMES.HOME_SCREEN
>;
