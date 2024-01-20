import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {GREEN, PRIMARY_COLOR, WHITE} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

const Categories = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.categoryContainer}>
        <Image source={props.serviceImage} />
      </TouchableOpacity>
      <Text style={styles.serviceName}>{props.serviceName}</Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    height: 90,
    width: 90,
    margin: 4,
    backgroundColor: WHITE,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  serviceName: {
    // Additional styles for the service name...
  },
});
