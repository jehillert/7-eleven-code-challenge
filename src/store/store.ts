import { Middleware, UnknownAction } from 'redux';
import { ThunkAction, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

const logger: Middleware = store => next => action => {
  const type = (action as UnknownAction).type;
  const shouldLog = !['persist/PERSIST', 'persist/REHYDRATE'].includes(type);
  shouldLog && console.log(`dispatching: ${(action as UnknownAction).type}`);
  let result = next(action);
  return result;
};

const crashReporter: Middleware = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })
      .concat(__DEV__ ? [crashReporter] : [])
      .concat(__DEV__ ? [logger] : []),
  devTools: __DEV__,
});

if (__DEV__ && (module as any).hot) {
  (module as any).hot.accept(() => {
    const newRootReducer = require('./root-reducer').default;
    store.replaceReducer(() => newRootReducer);
  });
}

type AppDispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;

type AsyncAppThunkWReturn<SomeReturnType> = AppThunk<Promise<SomeReturnType>>;

export type { AppDispatch, RootState, AppThunk, AsyncAppThunkWReturn };

export { store };
