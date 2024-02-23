import React from 'react';
import RoutesStack from './routes/routeStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import appStore from './src/store';
import {StripeProvider} from '@stripe/stripe-react-native';
import { PUBLISH_ABLE_KEY } from './src/utils/stripeKey';

const {store, persistor} = appStore();

const App = () => {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey= {PUBLISH_ABLE_KEY}>
      <PersistGate loading={null} persistor={persistor}>
        <RoutesStack />
      </PersistGate>
      </StripeProvider>
    </Provider>
  );
};

export default App;
