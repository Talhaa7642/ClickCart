import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {GREEN, PRIMARY_COLOR, WHITE} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AdminBoard = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.categoryContainer}>
        <Image style={{height: 70, width: 70}} source={props.serviceImage} />
      </TouchableOpacity>
      <Text style={styles.serviceName}>{props.serviceName}</Text>
    </View>
  );
};

export default AdminBoard;

const styles = StyleSheet.create({
  categoryContainer: {
    height: windowHeight * 0.16,
    width: windowWidth * 0.36,
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
