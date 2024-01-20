import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {RED_ERROR} from '../../utils/colors';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

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
          height: '40%',
          backgroundColor: 'white',
          width: '100%',
          borderRadius: 20,
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <Text style={{fontWeight: '500', fontSize: 16, marginVertical: '4%'}}>
          Forgot Password?
        </Text>
        <Text style={{fontWeight: '400', fontSize: 14, marginHorizontal: '6%'}}>
          Enter Your Email Address For Verification Process, So We Can Send 4
          Digit Code To Your Email
        </Text>
        <View
          style={{
            backgroundColor: '#D9D9D9',
            width: '94%',
            paddingVertical: '4%',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 1,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            marginTop: '8%',
            marginBottom: '4%',
          }}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email Address"
          />
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: WHITE}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    // </View>
  );
};

export default ForgotPassword;
