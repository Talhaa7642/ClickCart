import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Svg from 'react-native-svg';
import {GREEN, PRIMARY_COLOR, WHITE} from '../utils/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ServiceProviderDetails = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress} style={styles.categoryContainer}>
        <View style={styles.itemsView}>
          <Text style={styles.itemsText}>Name:</Text>
          <Text style={styles.itemsText}>{props.serviceName}</Text>
        </View>
        <View style={styles.itemsView}>
          <Text style={styles.itemsText}>{props.serviceName}</Text>
          <Text style={styles.itemsText}>{props.serviceName}</Text>
        </View>
        <View style={styles.itemsView}>
          <Text style={styles.itemsText}>{props.serviceName}</Text>
          <Text style={styles.itemsText}>{props.serviceName}</Text>
        </View>
        <Text style={{}}>{props.serviceName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceProviderDetails;

const styles = StyleSheet.create({
  categoryContainer: {
    height: 150,
    width: windowWidth * 0.9,
    margin: 4,
    backgroundColor: WHITE,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // flexDirection: 'row',
    // marginHorizontal: 40,
  },
  itemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '2%',
    // backgroundColor: 'red',
    alignItems: 'center',
    width: windowWidth * 0.8,
  },
  itemsText: {fontWeight: '500', fontSize: 16},
});
