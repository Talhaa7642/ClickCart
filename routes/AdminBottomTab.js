import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {WHITE} from '../src/utils/colors';
import ProfileScreen from '../src/screens/ProfileScreen/profileScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import StoreScreen from '../src/screens/Store/StoreScreen';
import StoreProductsScreen from '../src/screens/StoreProductsScreen/StoreProductsScreen';
import ProductDetail from '../src/screens/ProductDetail/ProductDetail';
import {useDispatch} from 'react-redux';
import {setUser} from '../src/store/features/userSlice';
import Providers from '../src/screens/Providers/Providers';

const Tab = createBottomTabNavigator();
const AdminBottomTab = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Providers"
        options={{
          headerShown: false,
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
        component={Providers}
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
        listeners={({navigation, route}) => ({
          tabPress: e => {
            if (route.name == 'ProfileScreen') dispatch(setUser(null));
          },
        })}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default AdminBottomTab;

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
