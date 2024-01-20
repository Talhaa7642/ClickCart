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
import DropDownPicker from 'react-native-dropdown-picker';

import Svg from 'react-native-svg';
import {GREEN, PRIMARY_COLOR, WHITE} from '../utils/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BookingRequest = props => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.categoryContainer}>
        <Text style={{...styles.itemsText, fontSize: 19}}>
          {props.serviceName}
        </Text>
        <View style={styles.itemsView}>
          <Text style={styles.itemsText}>Name:</Text>
          <Text style={styles.itemsText}>Hafiz Talha</Text>
        </View>
        <View style={styles.itemsView}>
          <Text style={styles.itemsText}>Scheduled:</Text>
          <Text style={styles.itemsText}>9am, 27th april</Text>
        </View>

        <View style={styles.itemsView}>
          <Text style={styles.itemsText}>Order ID:</Text>
          <Text style={styles.itemsText}>PM-19943</Text>
        </View>
        <View style={styles.itemsView}>
          <Text style={styles.itemsText}>Contact:</Text>
          <Text style={styles.itemsText}>0320-9469594</Text>
        </View>
        <View style={styles.itemsView}>
          <Text style={styles.itemsText}>Status</Text>
          <View>
            <DropDownPicker
              items={[
                {label: 'Pending', value: 'Pending'},
                {label: 'Completed', value: 'Completed'},
                {label: 'Cancled', value: 'Cancled'},
              ]}
              defaultValue={selectedValue}
              containerStyle={{height: 40, width: 200}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setSelectedValue(item.value)}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookingRequest;

const styles = StyleSheet.create({
  categoryContainer: {
    height: 220,
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
