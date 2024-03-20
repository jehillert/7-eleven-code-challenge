import {Platform, PlatformIOSStatic} from 'react-native';

const platformIOS = Platform as PlatformIOSStatic;
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const isPad = isIos && platformIOS.isPad;
export const deviceBool = {isAndroid, isIos, isPad};
