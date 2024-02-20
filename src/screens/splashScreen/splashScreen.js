import React, {useEffect} from 'react';

// import all the components we are going to use
import {View, StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../utils/colors';
import Svg, {SvgXml} from 'react-native-svg';
import {SPLASH_SCREEN_IMAGE} from '../../utils/assets';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const {user} = useSelector(store => store.user);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) navigation.navigate('SearchOrScan');
      else navigation.navigate('LoginScreen');
    }, 2000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container]}>
      <SvgXml xml={SPLASH_SCREEN_IMAGE} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // marginHorizontal: 40,
  },
});
