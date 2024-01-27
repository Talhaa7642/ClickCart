import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { WHITE } from '../utils/colors';

const Categories = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.categoryContainer}>
      <ImageBackground style={styles.categoryImage} source={props.serviceImage} >
        {/* <TouchableOpacity style={{height: 10, backgroundColor: 'grey'}}> */}
      <Text style={styles.serviceName}>{props.serviceName}</Text>
      {/* </TouchableOpacity> */}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    height: 180,
    width: 120,
    // margin: 4,
    backgroundColor: 'green',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 20,
    marginVertical: '10%'
  },
  categoryImage: {
    height: '100%', // Adjust the height based on your design
    width: '100%', // Take up the full width
    borderRadius: 20,
  },
  serviceName: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 16, // Adjust the font size based on your design
    fontWeight: '400',
  },
});
