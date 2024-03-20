import {Dimensions, Platform, PlatformIOSStatic} from 'react-native';

const platformIOS = Platform as PlatformIOSStatic;
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const isPad = isIos && platformIOS.isPad;
export const deviceBool = {isAndroid, isIos, isPad};
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const staticDimensions = {
  screenHeight,
  screenWidth,
};
