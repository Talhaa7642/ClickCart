import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
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
import ScanQRScreen from '../src/screens/scanQRCodeScreen/scanQRScreen';
import CreatePassword from '../src/screens/CreatePassword/CreatePassword';
import SearchStore from '../src/screens/SearchStore/SearchStore';
const Stack = createNativeStackNavigator();

export default function RoutesStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="AddLocation" component={AddLocation} />

        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
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
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="ScanQRScreen" component={ScanQRScreen} />
        <Stack.Screen name="SearchStore" component={SearchStore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
