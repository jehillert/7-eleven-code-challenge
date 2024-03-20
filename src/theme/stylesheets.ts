import { StyleSheet } from 'react-native';

const shadowStyles = StyleSheet.create({
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

export { shadowStyles };
