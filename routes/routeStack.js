import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {getItemFromAsyncStorage} from '../src/utils/asyncStorage';

import SplashScreen from '../src/screens/splashScreen/splashScreen';
import LoginScreen from '../src/screens/loginScreen/loginScreen';
import SignUpScreen from '../src/screens/signUpScreen/signUpScreen';
import HomeScreen from '../src/screens/HomeScreen/homeScreen';
import BottomTabNavigator from './bottomTabNavigator';
import ServiceProviderScreen from '../src/screens/ServiceProviderScreen/serviceProviderScreen';
import ProviderDescriptionScreen from '../src/screens/ProviderDescriptionScreen/providerDescriptionScreen';
import BookedScreen from '../src/screens/BookedScreen/bookedScreen';
import PreviousServicesScreen from '../src/screens/PreviousServicesScreen/previousServices';
import AdminDashboard from '../src/screens/AdminSide/AdminDashboard/adminDashboard';
import AddServices from '../src/screens/AdminSide/AddServices/addServices';
import AddLocation from '../src/screens/AddLocation/addLocation';
import BookingScreen from '../src/screens/AdminSide/BookingReq/bookingReq';
import AddProviders from '../src/screens/AdminSide/AddProviders/addProviders';
import ForgotPassword from '../src/screens/forgotPassword/forgotPassword';
import CreatePassword from '../src/screens/CreatePassword/CreatePassword';
import SearchStore from '../src/screens/SearchStore/SearchStore';
import SellerCenter from '../src/screens/SellerCenter/SellerCenter';
import AddProduct from '../src/screens/AddProduct/AddProduct';
import AllProduct from '../src/screens/AllProduct/AllProduct';
import AddStore from '../src/screens/AddStore/AddStore';
import {useSelector} from 'react-redux';
import ShopBottomTab from './ShopBottomTab';
import Providers from '../src/screens/Providers/Providers';
import QRCodeGenerator from '../src/screens/GenerateQRCode/GenerateQRCode';
import SearchOrScan from '../src/screens/SearchOrScan/searchOrScan';
import { ScanScreen } from '../src/screens/QRScanScreen/QRScanScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="CreatePassword" component={CreatePassword} />
  </Stack.Navigator>
);

const AdminStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Providers" component={Providers} />
  </Stack.Navigator>
);

const ShopStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="QRCodeGenerator" component={QRCodeGenerator} />
    <Stack.Screen name="ShopBottomTab" component={ShopBottomTab} />
  </Stack.Navigator>
);

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SearchOrScan" component={SearchOrScan} />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
      <Stack.Screen name="AddLocation" component={AddLocation} />

      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="ServiceProviderScreen"
        component={ServiceProviderScreen}
      />
      <Stack.Screen
        name="ProviderDescriptionScreen"
        component={ProviderDescriptionScreen}
      />
      <Stack.Screen name="BookedScreen" component={BookedScreen} />
      <Stack.Screen
        name="PreviousServicesScreen"
        component={PreviousServicesScreen}
      />
      {/* Admin Side Routes*/}
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      <Stack.Screen name="AddServices" component={AddServices} />
      <Stack.Screen name="AddProviders" component={AddProviders} />
      <Stack.Screen name="SearchStore" component={SearchStore} />
    </Stack.Navigator>
  );
};

const Route = () => {
  const {user} = useSelector(store => store.user);
  console.log('user', user?.role);
  const renderRoute = () => {
    if (user && user?.role == 'shopkeeper') {
      return <ShopStack />;
    } else if (user && user?.role == 'customer') {
      return <RootStack />;
    } else if (user && user?.role == 'admin') {
      return <AdminStack />;
    } else {
      return <AuthStack />;
    }
  };

  return <NavigationContainer>{renderRoute()}</NavigationContainer>;
};

export default Route;
