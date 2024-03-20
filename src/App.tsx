import React from 'react';
import { UIManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppCore from './AppCore';
import { isAndroid } from './constants';
import { store } from './store';

if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppCore />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
