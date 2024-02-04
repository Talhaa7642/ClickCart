import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {
  DARK_GREY,
  LIGHT_GREY1,
  PRIMARY_COLOR,
  SOLID_BLACK,
  WHITE,
} from '../../utils/colors';
import {RED_ERROR} from '../../utils/colors';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Ionicons} from '../../utils/icons';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (number === 'admin' && password === 'admin') {
      navigation.navigate('AdminDashboard');
    } else if (number === 'user' && password === 'user') {
      navigation.navigate('BottomTabNavigator');
    }
  };

  return (
    // <View style={[styles.container]}>
    <LinearGradient
      colors={['#4c56', '#3b5998', '#192f6a']}
      style={[styles.container]}>
      <View
        style={{
          height: '36%',
          backgroundColor: 'white',
          width: '90%',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 12,
            marginVertical: '4%',
            color: SOLID_BLACK,
          }}>
          Forgot Password?
        </Text>

        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            marginHorizontal: '6%',
            color: SOLID_BLACK,
          }}>
          Enter Your Email Address For Verification Process, So We Can Send 4
          Digit Code To Your Email
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            style={{marginHorizontal: '4%'}}
            name="lock-closed"
            size={22}
            color={LIGHT_GREY1}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={DARK_GREY}
          />
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: WHITE}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('CreatePassword')}
        style={styles.loginButton}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: WHITE}}>
          Verfication mail has been sent!
        </Text>
      </TouchableOpacity>
    </LinearGradient>
    // </View>
  );
};

export default ForgotPassword;
