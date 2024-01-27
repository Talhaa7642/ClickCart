import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {View, StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../utils/colors';
import Svg, { SvgXml } from 'react-native-svg';
import { SPLASH_SCREEN_IMAGE } from '../../utils/assets';

const SplashScreen = ({navigation}) => {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  useEffect(() => {
    // Navigate to the login screen after 2 seconds
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container]}>
      <SvgXml xml={SPLASH_SCREEN_IMAGE}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center'
    // flexDirection: 'row',
    // marginHorizontal: 40,
  },
});
