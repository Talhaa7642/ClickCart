import React, {useState} from 'react';

// import all the components we are going to use
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
const SignUpScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <LinearGradient
      colors={['#4c56', '#3998', '#19316a']}
      style={[styles.container]}>
      <Image
        style={{height: 120, width: 120, borderRadius: 60, marginBottom: 10}}
        source={require('../../assets/logos/logo.png')}
      />

      <Text style={{fontSize: 24, fontWeight: '500'}}>Sign Up With Email</Text>

      <TextInput
        style={styles.input}
        onChangeText={setFullName}
        value={fullName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enmail"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('AddLocation')}
        style={{
          backgroundColor: PRIMARY_COLOR,
          height: '6%',
          width: '90%',
          marginVertical: '1%',
          borderRadius: 22,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: WHITE}}>
          SignUp
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 16, color: PRIMARY_COLOR, right: 0}}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{marginVertical: '4%', alignItems: 'flex-end'}}>
          <Text style={{fontSize: 18, color: PRIMARY_COLOR, right: 0}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
        </LinearGradient>
  );
};

export default SignUpScreen;
