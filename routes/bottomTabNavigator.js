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

const BottomTabNavigator = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
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
        component={HomeScreen}
      />

      <Tab.Screen
        name="StoreScreen"
        options={{
          headerShown: false,
          tabBarLabel: 'OrderScreen',
          tabBarIcon: ({color}) => (
            <Fontisto name="shopping-store" size={20} color={color} />
          ),
        }}
        component={PreviousServicesScreen}
      />

      <Tab.Screen
        name="OrderScreen"
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
        component={PreviousServicesScreen}
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

export default BottomTabNavigator;

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
