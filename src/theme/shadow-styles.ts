import { StyleSheet } from 'react-native';
import { isIos } from '../constants';

const shadowObj = StyleSheet.create({
  ios1: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: -4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  android1: {
    elevation: 5,
  },
  ios2: {
    shadowColor: '#101010',
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  android2: {
    elevation: 12,
  },
});

const shadowCss = [
  `
  ${
    isIos
      ? `
      shadow-color: ${shadowObj.ios1.shadowColor};
      shadow-offset: {
        width: ${shadowObj.ios1.shadowOffset.width}px;
        height: ${shadowObj.ios1.shadowOffset.height}px;
      };
      shadow-opacity: ${shadowObj.ios1.shadowOpacity};
      shadow-radius: ${shadowObj.ios1.shadowRadius}px;
    `
      : `elevation: ${shadowObj.android1.elevation};`
  }`,
  `
  ${
    isIos
      ? `
      shadow-color: ${shadowObj.ios2.shadowColor};
      shadow-offset: {
        width: ${shadowObj.ios2.shadowOffset.width}px;
        height: ${shadowObj.ios2.shadowOffset.height}px;
      };
      shadow-opacity: ${shadowObj.ios2.shadowOpacity};
      shadow-radius: ${shadowObj.ios2.shadowRadius}px;
    `
      : `elevation: ${shadowObj.android2.elevation};`
  }`,
];

export { shadowCss, shadowObj };
