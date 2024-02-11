import React from 'react';
import RoutesStack from './routes/routeStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import appStore from './src/store';

const {store, persistor} = appStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RoutesStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
