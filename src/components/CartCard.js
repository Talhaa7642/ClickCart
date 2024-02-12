import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import QuantityBtn from './QuantityBtn';
import {MaterialCommunityIcons} from '../utils/icons';
import {BLACK1, GREY_MID, LIGHT_GREY0, LIGHT_GREY2} from '../utils/colors';
import Divider from './Divider';
import {useCart} from '../hooks/useCart';
import {useSelector} from 'react-redux';

const CartCard = ({item}) => {
  const {handleCart} = useCart();
  const {user} = useSelector(store => store.user);

  const [qty, setQty] = useState(item.quantity);

  const handleDecreament = () => {
    if (qty > 0) {
      setQty(qty - 1);
      handleCart(item, qty - 1);
    }
  };

  const handleIncreament = () => {
    setQty(qty + 1);
    handleCart(item, qty + 1);
  };

  const handleDelete = item => {
    handleCart(item, 0);
  };

  return (
    <>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item?.images[0]}}
            style={styles.img}
            resizeMode="contain"
          />
        </View>

        <View style={styles.col}>
          <View style={styles.row1}>
            <Text style={styles.nameTxt}>{item.name}</Text>
            {user.role == 'shopkeeper' ? null : (
              <MaterialCommunityIcons
                name="delete"
                size={20}
                color={LIGHT_GREY2}
                onPress={() => handleDelete(item)}
              />
            )}
          </View>

          <View style={styles.row1}>
            <Text style={styles.priceTxt}>Rs. {item.price}</Text>
            <QuantityBtn
              onMinusPress={handleDecreament}
              onPlusPress={handleIncreament}
              quantity={item.quantity}
            />
          </View>
        </View>
      </View>
      <Divider space={'7%'} />
    </>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  row: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  col: {
    height: '76%',
    flex: 1,
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameTxt: {
    fontWeight: '500',
    fontSize: 14,
    color: GREY_MID,
  },
  priceTxt: {
    fontWeight: '700',
    fontSize: 16,
    color: BLACK1,
  },
  imageContainer: {
    borderRadius: 8,
    width: 112,
    height: 80,
    backgroundColor: LIGHT_GREY0,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '6%',
  },
  img: {
    height: '100%',
    width: '80%',
  },
});
