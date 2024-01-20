import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {PRIMARY_COLOR, SOLID_BLACK, WHITE} from '../../utils/colors';
import Svg from 'react-native-svg';
import {RED_ERROR} from '../../utils/colors';
import {styles} from './styles';

const AddLocation = ({navigation}) => {
  const [location, setLocation] = useState('dajdhgwajhdg');

  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/loginScreenImg.png')}
      />
      <Text style={{fontSize: 24, fontWeight: '500'}}>
        Please Enter Your Location
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setLocation}
        value={location}
        placeholder="Enter Location"
      />
      <Image
        style={{marginVertical: '10%'}}
        source={require('../../assets/images/map.png')}
      />
      {console.log('dewdw', location)}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BottomTabNavigator', {
            screen: 'HomeScreen',
            params: {location},
          })
        }
        style={styles.loginButton}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: WHITE}}>
          Add Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddLocation;
