import React, {useState} from 'react';

// import all the components we are going to use
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {
  DARK_GREY,
  GREY_MID,
  LIGHT_GREY1,
  LIGHT_PURPLE,
  PRIMARY_COLOR,
  WHITE,
} from '../../utils/colors';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Ionicons} from '../../utils/icons';

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

      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: GREY_MID,
          alignSelf: 'flex-start',
          marginLeft: '6%',
          marginVertical: '5%',
        }}>
        Sign Up With Email
      </Text>

      <View style={styles.inputContainer}>
        <Ionicons
          style={{marginHorizontal: '4%'}}
          name="mail"
          size={22}
          color={LIGHT_GREY1}
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor={DARK_GREY}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          style={{marginHorizontal: '4%'}}
          name="lock-closed"
          size={22}
          color={LIGHT_GREY1}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor={DARK_GREY}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          style={{marginHorizontal: '4%'}}
          name="lock-closed"
          size={22}
          color={LIGHT_GREY1}
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor={DARK_GREY}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('AddLocation')}
        style={{
          backgroundColor: LIGHT_PURPLE,
          height: '6%',
          width: '90%',
          marginVertical: '1%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: WHITE}}>
          SignUp
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SignUpScreen;
