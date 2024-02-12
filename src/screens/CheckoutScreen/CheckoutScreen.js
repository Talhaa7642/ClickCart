import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DARK_GREY,
  GREY_MID,
  MID_YELLOW,
  SOLID_BLACK,
  WHITE,
} from '../../utils/colors';
import Header from '../../components/Header';
import {CategoriesArray} from '../../utils/constants';
import CartCard from '../../components/CartCard';
import SmallButton from '../../components/SmallButton';
import Circle from '../../components/Circle';
import {Entypo, FontAwesome5} from '../../utils/icons';
import {useDispatch, useSelector} from 'react-redux';
import {setAddress} from '../../store/features/cartSlice';
import {doc, onSnapshot, updateDoc} from 'firebase/firestore';
import {db, orderRef} from '../../firebase';
import Loader from '../../components/Loader';

const CheckoutScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.user);
  const {cart, address} = useSelector(store => store.cart);

  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);
  const [shipAddress, setShipAddress] = useState(address);
  const [orders, setOrders] = useState([]);
  const [loader1, setLoader1] = useState(false);
  const [loader, setLoader] = useState(false);

  const renderItem = ({item}) =>
    item.quantity == 0 ? null : <CartCard item={item} />;

  useEffect(() => {
    setLoader1(true);
    onSnapshot(orderRef, snapshot => {
      let orders = [];
      snapshot.docs.forEach(el => {
        if (el.data().status == 'pending') {
          console.log('pending', el.data().carts);
          orders.push({
            ...el.data(),
            cart: JSON.parse(el.data().cart),
            id: el.id,
          });
        }
      });
      setShipAddress(orders[0]?.shippingAddress);
      setOrders(orders);
      setLoader1(false);
    });
  }, []);

  const handleNavigate = () => {
    dispatch(setAddress(shipAddress));

    navigation.navigate('PaymentScreen');
  };

  const handleAllowOrder = async () => {
    setLoader(true);
    const docRef = doc(db, 'orders', orders[0]?.id);

    await updateDoc(docRef, {
      status: 'shipped',
    });

    setLoader(false);
  };

  return (
    <View style={styles.container}>
      <Header title="Checkout" rightIcon={null} />
      {loader1 ? (
        <Loader indicatorStyle={styles.indicator} />
      ) : orders.length == 0 ? (
        <Text style={styles.txt1}>No order found</Text>
      ) : (
        <>
          <Text style={styles.shipTxt}>Shipping address</Text>

          <View style={styles.row}>
            <Circle
              size={37}
              containerStyle={{backgroundColor: '#D2E4FF', marginRight: '4%'}}>
              <Entypo name="location-pin" size={20} color={SOLID_BLACK} />
            </Circle>

            <View style={{flex: 1}}>
              <Text style={styles.txt1}>Home</Text>
              <TextInput
                editable={user.role == 'shopkeeper' ? false : true}
                style={styles.inputContainer}
                onChangeText={setShipAddress}
                value={shipAddress}
                placeholder="Enter address"
                placeholderTextColor={DARK_GREY}
              />
            </View>

            <FontAwesome5 name="pen" size={20} color={SOLID_BLACK} />
          </View>

          <Text style={[styles.shipTxt, {marginBottom: '4%'}]}>Order list</Text>

          {orders[0]?.cart.length > 0 || cart.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={user?.role == 'shopkeeper' ? orders[0]?.cart : cart}
              keyExtractor={item => item?.id?.toString()}
              renderItem={renderItem}
            />
          ) : null}

          <SmallButton
            loader={loader}
            onPress={
              user.role == 'shopkeeper' ? handleAllowOrder : handleNavigate
            }
            title={
              user.role == 'shopkeeper' ? 'Allow Order' : 'Continue to payment'
            }
            btnStyle={styles.btnStyle}
            titleStyle={styles.titleStyle}
          />
        </>
      )}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: '2%',
    padding: 8,
    backgroundColor: WHITE,
    color: SOLID_BLACK,
    borderRadius: 8,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
