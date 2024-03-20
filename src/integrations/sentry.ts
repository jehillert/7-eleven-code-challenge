import * as Sentry from '@sentry/react-native';
import * as appConfig from '../appConfig';

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

const initSentry = () =>
  appConfig?.SENTRY_ENABLED === 'true' &&
  Sentry.init({
    dsn: appConfig.SENTRY_ENDPOINT,
    attachScreenshot: true,
    tracesSampleRate: 1.0,
    release: appConfig?.APP_VERSION,
    debug: true,
    dist: appConfig?.APP_BUILD,
    integrations: [
      new Sentry.ReactNativeTracing({
        enableUserInteractionTracing: true,
        routingInstrumentation,
      }),
    ],
  });

export { Sentry, initSentry, routingInstrumentation };
