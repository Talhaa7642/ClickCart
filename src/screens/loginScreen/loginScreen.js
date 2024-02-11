import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {MID_PURPLE, SOLID_BLACK, WHITE} from '../../utils/colors';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Divider from '../../components/Divider';
import Circle from '../../components/Circle';
import SmallButton from '../../components/SmallButton';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, userRef} from '../../firebase';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/features/userSlice';
import Toast from 'react-native-simple-toast';
import {getDocs} from 'firebase/firestore';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const handleLogin = async () => {
    if (email != '' && password != '') {
      setLoader(true);
      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        const userlist = await getDocs(userRef);
        let role = '';
        userlist.docs.forEach(doc => {
          if (cred.user.uid == doc.data().uid) {
            role = doc.data().role;
          }
        });

        const copyUser = {
          ...cred.user,
          role: role,
        };

        dispatch(setUser(copyUser));
      } catch (err) {
        console.log('login err', err?.message);
        Toast.showWithGravity(
          err?.message.toString(),
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } finally {
        setLoader(false);
      }
    } else {
      Toast.showWithGravity(
        'Please enter email and password',
        Toast.SHORT,
        Toast.BOTTOM,
      );
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
      <Text
        style={{
          fontWeight: '700',
          fontSize: 36,
          color: SOLID_BLACK,
          marginBottom: '4%',
        }}>
        Sign In
      </Text>
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
            width: '90%',
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
          <View style={styles.row}>
            <Circle size={33} containerStyle={{backgroundColor: '#E3A4A4'}} />
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor="#666666"
            />
          </View>

          <Divider space="1%" />
          <View style={styles.row}>
            <Circle size={33} containerStyle={{backgroundColor: MID_PURPLE}} />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#666666"
              secureTextEntry
            />
          </View>
        </View>

        <SmallButton
          loader={loader}
          onPress={handleLogin}
          title="Sign In"
          btnStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
        />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                color: MID_PURPLE,
                right: 0,
              }}>
              Forgot Password?{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={{
              alignItems: 'flex-end',
              backgroundColor: 'black',
              borderRadius: 16,
              paddingVertical: 6,
              paddingHorizontal: 12,
            }}>
            <Text style={{fontSize: 14, color: WHITE, right: 0}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
    // </View>
  );
};

export default LoginScreen;
