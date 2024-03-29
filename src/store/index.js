import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {name as appName} from '../../app.json';
import rootReducer from './features';

const persistConfig = {
  key: 'root',
  whitelist: ['user', 'cart', 'deal'],
  keyPrefix: appName,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  });
  let persistor = persistStore(store);
  return {store, persistor};
};
