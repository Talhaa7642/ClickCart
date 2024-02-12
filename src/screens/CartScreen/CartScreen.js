import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CategoriesArray} from '../../utils/constants';
import CartCard from '../../components/CartCard';
import {
  BLACK1,
  GREY_MID,
  LIGHT_GREY1,
  MID_YELLOW,
  WHITE,
} from '../../utils/colors';
import Header from '../../components/Header';
import SearchSvg from '../../assets/Svgs/SearchSvg';
import SmallButton from '../../components/SmallButton';
import {W_WIDTH} from '../../utils/dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {setOrderTotal} from '../../store/features/cartSlice';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {cart, orderTotal} = useSelector(store => store.cart);
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);
  const [total, setTotal] = useState(orderTotal);

  const renderItem = ({item}) =>
    item.quantity == 0 ? null : <CartCard item={item} />;

  useEffect(() => {
    if (cart.length > 0) {
      let total = 0;
      cart.map(el => {
        if (el.quantity >= 1) {
          total += el.quantity * parseInt(el.price);
        }
      });
      setTotal(total);
      dispatch(setOrderTotal(total));
    }
  }, [cart]);

  return (
    <View style={styles.container}>
      <Header title="My Cart" rightIcon={<SearchSvg />} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />

      <View style={styles.bottomContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.price1Txt}>Total Price</Text>
          <Text style={styles.price2Txt}>Rs {total}</Text>
        </View>

        <SmallButton
          onPress={() => navigation.navigate('CheckoutScreen')}
          title="Tranfer to Merchant"
          btnStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
    backgroundColor: WHITE,
  },
  bottomContainer: {
    width: W_WIDTH,
    alignSelf: 'center',
    paddingHorizontal: '3%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT_GREY1,
  },
  price1Txt: {
    fontWeight: '500',
    fontSize: 14,
    color: GREY_MID,
    marginBottom: 5,
  },
  price2Txt: {
    fontWeight: '700',
    fontSize: 16,
    color: BLACK1,
  },
  btnStyle: {
    position: 'relative',
    bottom: 0,
    padding: 14,
    width: '40%',
    marginHorizontal: 0,
    backgroundColor: MID_YELLOW,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: WHITE,
  },
});
