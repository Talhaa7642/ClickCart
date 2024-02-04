import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DARK_GREY,
  LIGHT_GREY1,
  LIGHT_PURPLE,
  PRIMARY_COLOR,
  SOLID_BLACK,
  WHITE,
} from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Ionicons} from '../../utils/icons';

const CreatePassword = () => {
  return (
    <LinearGradient
      colors={['#4c56', '#3b5998', '#192f6a']}
      style={[styles.container]}>
      <View
        style={{
          height: '40%',
          backgroundColor: 'white',
          width: '90%',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 20,
            marginVertical: '4%',
            color: SOLID_BLACK,
          }}>
          Create New Password
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
            placeholder="New Password"
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
            placeholder="Confirm Confirm Password"
            placeholderTextColor={DARK_GREY}
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: WHITE}}>
            Update Password
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo: {height: 180, width: 180, borderRadius: 60, marginBottom: 10},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: '2%',
    padding: 8,
    backgroundColor: WHITE,
    borderRadius: 8,
    elevation: 1,
  },
  input: {
    color: SOLID_BLACK,
  },
  loginButton: {
    backgroundColor: LIGHT_PURPLE,
    height: 44,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '4%',
  },
});
