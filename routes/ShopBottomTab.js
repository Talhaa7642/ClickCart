import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {PRIMARY_COLOR, WHITE} from '../src/utils/colors';
import Svg, {SvgXml} from 'react-native-svg';
import HomeScreen from '../src/screens/HomeScreen/homeScreen';
import {HOME_ICON} from '../src/utils/assets';
import PreviousServicesScreen from '../src/screens/PreviousServicesScreen/previousServices';
import ProfileScreen from '../src/screens/ProfileScreen/profileScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import StoreScreen from '../src/screens/Store/StoreScreen';
import StoreProductsScreen from '../src/screens/StoreProductsScreen/StoreProductsScreen';
import ProductDetail from '../src/screens/ProductDetail/ProductDetail';
import CartScreen from '../src/screens/CartScreen/CartScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckoutScreen from '../src/screens/CheckoutScreen/CheckoutScreen';
import PaymentScreen from '../src/screens/PaymentScreen/PaymentScreen';
import OrderCompleteScreen from '../src/screens/OrderCompleteScreen/OrderCompleteScreen';
import OrderIdScreen from '../src/screens/OrderIdScreen/OrderIdScreen';
import SellerCenter from '../src/screens/SellerCenter/SellerCenter';
import AddProduct from '../src/screens/AddProduct/AddProduct';
import AddStore from '../src/screens/AddStore/AddStore';
import AllProduct from '../src/screens/AllProduct/AllProduct';

const Stack = createNativeStackNavigator();
const CartStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="CartScreen" component={CartScreen} />
    <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    <Stack.Screen name="OrderCompleteScreen" component={OrderCompleteScreen} />
    <Stack.Screen name="OrderIdScreen" component={OrderIdScreen} />
  </Stack.Navigator>
);

const ProductStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SellerCenter" component={SellerCenter} />
    <Stack.Screen name="AddProduct" component={AddProduct} />
    <Stack.Screen name="AddStore" component={AddStore} />
    <Stack.Screen name="AllProduct" component={AllProduct} />
  </Stack.Navigator>
);

const ShopBottomTab = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../src/assets/images/home.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
        component={ProductStack}
      />

      <Tab.Screen
        name="StoreScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Fontisto name="shopping-store" size={20} color={color} />
          ),
        }}
        component={StoreScreen}
      />

      <Tab.Screen
        name="StoreProductsScreen"
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarButton: () => null,
        }}
        component={StoreProductsScreen}
      />

      <Tab.Screen
        name="ProductDetail"
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarButton: () => null,
        }}
        component={ProductDetail}
      />

      <Tab.Screen
        name="CartStack"
        options={{
          headerShown: false,
          tabBarLabel: 'OrderScreen',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../src/assets/images/clipboard.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
        component={CartStack}
      />

      <Tab.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
          tabBarLabel: 'ProfileScreen',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../src/assets/images/user.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default ShopBottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // marginHorizontal: 40,
  },
});
