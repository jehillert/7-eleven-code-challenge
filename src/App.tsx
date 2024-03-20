import React from 'react';
import { LogBox, UIManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppCore from './AppCore';
import { isAndroid } from './constants';
import { Sentry, initSentry } from './integrations';
import { store } from './store';

if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

initSentry();

LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  return (
    <Sentry.TouchEventBoundary>
      <Provider store={store}>
        <SafeAreaProvider>
          <AppCore />
        </SafeAreaProvider>
      </Provider>
    </Sentry.TouchEventBoundary>
  );
}

export default App;
