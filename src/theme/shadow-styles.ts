import { StyleSheet } from 'react-native';
import { isIos } from '../constants';

const shadowObj = StyleSheet.create({
  fabIos: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: -4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  fabAndroid: {
    elevation: 5,
  },
  modalIos: {
    shadowColor: '#101010',
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  modalAndroid: {
    elevation: 12,
  },
});

const shadowCss = {
  fab: `
  ${
    isIos
      ? `
      shadow-color: ${shadowObj.fabIos.shadowColor};
      shadow-offset: {
        width: ${shadowObj.fabIos.shadowOffset.width}px;
        height: ${shadowObj.fabIos.shadowOffset.height}px;
      };
      shadow-opacity: ${shadowObj.fabIos.shadowOpacity};
      shadow-radius: ${shadowObj.fabIos.shadowRadius}px;
    `
      : `elevation: ${shadowObj.fabAndroid.elevation};`
  }`,
  modal: `
  ${
    isIos
      ? `
      shadow-color: ${shadowObj.modalIos.shadowColor};
      shadow-offset: {
        width: ${shadowObj.modalIos.shadowOffset.width}px;
        height: ${shadowObj.modalIos.shadowOffset.height}px;
      };
      shadow-opacity: ${shadowObj.modalIos.shadowOpacity};
      shadow-radius: ${shadowObj.modalIos.shadowRadius}px;
    `
      : `elevation: ${shadowObj.modalAndroid.elevation};`
  }`,
};

export { shadowCss, shadowObj };
