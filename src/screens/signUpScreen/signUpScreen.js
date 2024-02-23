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
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, userRef} from '../../firebase';
import Toast from 'react-native-simple-toast';
import {saveItemInAsyncStorage} from '../../utils/asyncStorage';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/features/userSlice';
import {addDoc} from 'firebase/firestore';
import DropDown from 'react-native-paper-dropdown';
import {Surface} from 'react-native-paper';
import SmallButton from '../../components/SmallButton';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [role, setRole] = useState('');
  const [loader, setLoader] = useState(false);

  const roleList = [
    {
      label: 'Customer',
      value: 'customer',
    },
    {
      label: 'Shopkeeper',
      value: 'shopkeeper',
    },
  ];

  const handleSubmit = async () => {
    if (email != '' && password != '' && confirmPassword != '' && role != '') {
      if (password != confirmPassword) {
        Toast.showWithGravity(
          `Password doesn't match`,
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else {
        setLoader(true);
        try {
          const cred = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );

          const payload = {
            uid: cred.user.uid,
            role: role,
          };

          await addDoc(userRef, payload);

          setEmail('');
          setPassword('');
          setConfirmPassword('');

          const copyUser = {
            ...cred.user,
            role: role,
          };

          dispatch(setUser(copyUser));

          Toast.showWithGravity(
            'Signup successfully',
            Toast.SHORT,
            Toast.BOTTOM,
          );
        } catch (err) {
          Toast.showWithGravity(
            err?.message.toString(),
            Toast.SHORT,
            Toast.BOTTOM,
          );
        } finally {
          setLoader(false);
        }
      }
    } else {
      Toast.showWithGravity(
        `Please enter email and password`,
        Toast.SHORT,
        Toast.BOTTOM,
      );
    }
  };

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
          secureTextEntry
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
          secureTextEntry
        />
      </View>

      <View
        style={{
          width: '90%',
          marginBottom: '2%',
        }}>
        <DropDown
        placeholder='Select Role'
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={role}
          setValue={setRole}
          list={roleList}
        />
      </View>

      <SmallButton
        loader={loader}
        onPress={handleSubmit}
        title="SignUp"
        btnStyle={styles.btnStyle}
        titleStyle={styles.titleStyle}
      />
    </LinearGradient>
  );
};

export default SignUpScreen;
