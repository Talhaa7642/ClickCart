import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BLACK1,
  GREY_MID,
  MIDDARK_BLUE,
  MID_PINK,
  MID_PURPLE,
  MID_YELLOW,
  WHITE,
} from '../../utils/colors';
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import SmallButton from '../../components/SmallButton';
import {W_WIDTH} from '../../utils/dimensions';
import AppTextInput from '../../components/AppTextInput';
import {addDoc} from 'firebase/firestore';
import {orderRef} from '../../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAddress,
  setOrderTotal,
  updateCart,
} from '../../store/features/cartSlice';

const PaymentScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.user);
  const {cart, address, orderTotal} = useSelector(store => store.cart);

  const [loader, setLoader] = useState(false);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      let arr = cart.map(el => {
        if (el.quantity > 0) {
          return el;
        }
      });
      setOrderData(arr);
    }
  }, [cart]);

  const handleSubmit = async () => {
    setLoader(true);
    try {
      let payload = {
        uid: user.uid,
        email: user.email,
        status: 'pending',
        orderTotal,
        shippingAddress: address,
        cart: JSON.stringify(orderData),
      };

      await addDoc(orderRef, payload);

      dispatch(updateCart([]));
      dispatch(setAddress(''));
      dispatch(setOrderTotal(0));

      setTimeout(() => {
        navigation.replace('OrderCompleteScreen');
      }, 250);
    } catch (error) {
      console.log('order err', error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <View style={styles.topContainer}>
          <SmallButton
            title="Pay Using Online"
            titleStyle={styles.titleStyle}
            btnStyle={styles.btnStyle1}
          />
          <SmallButton
            title="Cash"
            titleStyle={styles.titleStyle}
            btnStyle={styles.btnStyle2}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTxt}>
            Enter your password to complete payment.
          </Text>
          <AppTextInput hideIcon inputStyle={{marginVertical: '10%'}} />
          <SmallButton
            loader={loader}
            onPress={handleSubmit}
            title="Continue"
            btnStyle={styles.btnStyle3}
            titleStyle={styles.titleStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
    backgroundColor: WHITE,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    marginTop: '10%',
    height: 140,
    justifyContent: 'space-between',
  },
  txt1: {
    fontWeight: '600',
    fontSize: 20,
    color: BLACK1,
  },
  txt2: {
    fontWeight: '500',
    fontSize: 16,
    color: GREY_MID,
  },
  btnStyle1: {
    position: 'relative',
    padding: 16,
    marginHorizontal: 0,
    backgroundColor: MID_PURPLE,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 16,
    color: WHITE,
  },
  btnStyle2: {
    position: 'relative',
    padding: 16,
    marginHorizontal: 0,
    backgroundColor: MID_PINK,
  },
  bottomContainer: {
    padding: '10%',
    width: W_WIDTH,
    alignSelf: 'center',
    height: 400,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: MIDDARK_BLUE,
  },
  bottomTxt: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
    color: GREY_MID,
  },
  btnStyle3: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 16,
    width: '90%',
    alignSelf: 'center',
    marginHorizontal: 0,
    marginTop: '4%',
    backgroundColor: MID_YELLOW,
  },
});
