import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const ScanQRScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#4c56', '#3b5998', '#192f6a']}
      style={[styles.container]}>
      <View style={{height: '40%'}}>
        <Image
          style={styles.logo}
          source={require('../../assets/logos/logo.png')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomTabNavigator')}
        style={{...styles.input}}>
        <Text>Search Store</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          width: '90%',
          backgroundColor: '#FE7D55',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>
          Scan Store's QR Code
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ScanQRScreen;
