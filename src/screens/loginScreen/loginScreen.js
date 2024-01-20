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
import Svg, {SvgXml} from 'react-native-svg';
import {RED_ERROR} from '../../utils/colors';
import {styles} from './styles';
import {SPLASH_SCREEN_IMAGE} from '../../utils/assets';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({navigation}) => {
  const [number, onChangeNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (number === 'admin' && password === 'admin') {
      navigation.navigate('AdminDashboard');
    } else if (number === 'user' && password === 'user') {
      navigation.navigate('ScanQRScreen');
    }
  };

  return (
    // <View style={[styles.container]}>
    <LinearGradient
      colors={['#4c56', '#3b5998', '#192f6a']}
      style={[styles.container]}>
      <View
        style={{height: '40%', alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={styles.logo}
          source={require('../../assets/logos/logo.png')}
        />
      </View>
      <View
        style={{
          height: '60%',
          backgroundColor: 'white',
          width: '100%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
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
            marginBottom: '4%'
          }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter Email"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter Password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}  style={{}}>
          <Text style={{fontSize: 16, color: RED_ERROR, right: 0}}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: WHITE}}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16, color: PRIMARY_COLOR, right: 0}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={{ alignItems: 'flex-end'}}>
            <Text style={{fontSize: 18, color: PRIMARY_COLOR, right: 0}}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </LinearGradient>
    // </View>
  );
};

export default LoginScreen;
