import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';
import SmallButton from '../../components/SmallButton';
import { LIGHT_PURPLE, WHITE } from '../../utils/colors';

const QRCodeGenerator = ({navigation}) => {
  const {user} = useSelector(store => store.user);

  console.log(user.email, 'userr')
  return (
    <View style={{ justifyContent: 'center' ,alignItems: 'center', flex: 1}}>
      <QRCode
        value={user.email}
        size={200}
        color='black'
        backgroundColor='white'
      />

      <SmallButton 
      onPress={()=> navigation.navigate('ShopBottomTab')}
        title="Go To Dashboard"
        btnStyle={styles.btnStyle}
        titleStyle={styles.titleStyle}
     
      />
    </View>
  );
};

export default QRCodeGenerator;

const styles = StyleSheet.create({
    btnStyle: {
        width: '90%',
        marginBottom: '5%',
        position: 'relative',
        padding: 14,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: LIGHT_PURPLE,
        marginTop: 100
      },
      titleStyle: {
        fontWeight: 'bold',
        color: WHITE,
      },
})
