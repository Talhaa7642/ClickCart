import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../utils/colors';
import {styles} from './styles';
import Categories from '../../components/categories';
import {CategoriesArray} from '../../utils/constants';
import ServiceProviderDetails from '../../components/serviceProvider';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../store/features/userSlice';

const ProfileScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.user);

  const handleLogout = () => {
    dispatch(setUser(null));
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: '10%'}}>
        <Text style={styles.services}>ProfileScreen</Text>
      </View>
      <View style={styles.headerView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={styles.profilePic}
            source={require('../../assets/images/personIcon.png')}
          />
          <Text style={styles.userName}>{user.email}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editProfile}>
        <Text
          style={{
            ...styles.leftText,
            textAlign: 'center',
            color: PRIMARY_COLOR,
          }}>
          Previous Orders
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
        <Text style={{...styles.leftText, textAlign: 'center', color: WHITE}}>
          Logout
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          bottom: 0,
          position: 'absolute',
        }}>
        App Version 1.1.0
      </Text>
    </View>
  );
};

export default ProfileScreen;
