import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {SOLID_BLACK} from '../../utils/colors';
import {MaterialCommunityIcons, Octicons} from '../../utils/icons';

const SearchOrScan = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#4c56', '#3b5998', '#192f6a']}
      style={[styles.container]}>
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Image
          style={styles.logo}
          source={require('../../assets/logos/logo.png')}
        />

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchStore')}
            style={{...styles.input}}>
            <Text style={{fontWeight: '500', fontSize: 20, color: SOLID_BLACK}}>
              Search Store
            </Text>

            <Octicons name="search" size={30} color={SOLID_BLACK} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ScanScreen')}
            style={[
              styles.input,
              {
                marginTop: '14%',
                backgroundColor: '#FE7D55',
                paddingHorizontal: '8%',
              },
            ]}>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>
              Scan Store's QR Code
            </Text>

            <MaterialCommunityIcons
              name="line-scan"
              size={30}
              color={SOLID_BLACK}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SearchOrScan;
