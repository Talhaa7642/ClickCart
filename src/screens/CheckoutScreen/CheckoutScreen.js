import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GREY_MID, MID_YELLOW, SOLID_BLACK, WHITE} from '../../utils/colors';
import Header from '../../components/Header';
import {CategoriesArray} from '../../utils/constants';
import CartCard from '../../components/CartCard';
import SmallButton from '../../components/SmallButton';
import Circle from '../../components/Circle';
import {Entypo, FontAwesome5} from '../../utils/icons';

const CheckoutScreen = ({navigation}) => {
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const renderItem = ({item}) => <CartCard item={item} />;

  return (
    <View style={styles.container}>
      <Header title="Checkout" rightIcon={null} />

      <Text style={styles.shipTxt}>Shipping address</Text>

      <View style={styles.row}>
        <Circle
          size={37}
          containerStyle={{backgroundColor: '#D2E4FF', marginRight: '4%'}}>
          <Entypo name="location-pin" size={20} color={SOLID_BLACK} />
        </Circle>

        <View style={{flex: 1}}>
          <Text style={styles.txt1}>Home</Text>
          <Text style={styles.txt2}>No 46, PIA Road....</Text>
        </View>

        <FontAwesome5 name="pen" size={20} color={SOLID_BLACK} />
      </View>

      <Text style={[styles.shipTxt, {marginBottom: '4%'}]}>Order list</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <SmallButton
        onPress={() => navigation.navigate('PaymentScreen')}
        title="Continue to payment"
        btnStyle={styles.btnStyle}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
    backgroundColor: WHITE,
  },
  btnStyle: {
    position: 'relative',
    bottom: 20,
    padding: 14,
    marginHorizontal: 0,
    backgroundColor: MID_YELLOW,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: WHITE,
  },
  shipTxt: {
    fontWeight: '500',
    fontSize: 16,
    color: GREY_MID,
  },
  row: {
    marginVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt1: {
    fontWeight: '700',
    fontSize: 16,
    color: SOLID_BLACK,
  },
  txt2: {
    fontWeight: '500',
    fontSize: 14,
    color: GREY_MID,
  },
});
