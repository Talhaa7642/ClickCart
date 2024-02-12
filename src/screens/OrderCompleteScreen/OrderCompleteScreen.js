import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BLACK1,
  LIGHT_PURPLE,
  LIME_GREEN,
  MID_GREEN,
  MID_YELLOW,
  SOLID_BLACK,
  WHITE,
} from '../../utils/colors';
import Header from '../../components/Header';
import SmallButton from '../../components/SmallButton';
import {Feather} from '../../utils/icons';
import {Rating} from 'react-native-ratings';

const OrderCompleteScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.circle1}>
          <View style={styles.circle2}>
            <Feather name="check" size={42} color={WHITE} />
          </View>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt1}>Awesome!!</Text>
          <Text style={styles.txt2}>
            Your order has been completed and is being attended to.
          </Text>
        </View>
      </View>

      <SmallButton
        onPress={() => navigation.navigate('OrderIdScreen')}
        title="Track order"
        titleStyle={styles.titleStyle}
        btnStyle={styles.btnStyle1}
      />
      {/* <SmallButton
        title="Review"
        titleStyle={[styles.titleStyle, {color: SOLID_BLACK}]}
        btnStyle={styles.btnStyle2}
      />

      <Rating
        ratingCount={5}
        imageSize={30}
        tintColor={LIGHT_PURPLE}
        style={styles.rating}
      /> */}
    </View>
  );
};

export default OrderCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
    backgroundColor: WHITE,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  circle1: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: MID_GREEN,
    backgroundColor: LIME_GREEN,
  },
  circle2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MID_GREEN,
  },
  txtContainer: {
    width: '60%',
    alignItems: 'center',
  },
  txt1: {
    fontWeight: '700',
    fontSize: 32,
    color: BLACK1,
  },
  txt2: {
    fontWeight: '500',
    fontSize: 18,
    color: SOLID_BLACK,
    textAlign: 'center',
    marginTop: '5%',
  },
  btnStyle1: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 16,
    marginHorizontal: 0,
    backgroundColor: MID_YELLOW,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 16,
    color: WHITE,
  },
  btnStyle2: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 16,
    borderWidth: 2,
    borderColor: BLACK1,
    marginHorizontal: 0,
    marginTop: '10%',
    marginBottom: '5%',
    backgroundColor: 'transparent',
  },
  rating: {
    padding: 14,
    borderRadius: 14,
    marginBottom: '10%',
    backgroundColor: LIGHT_PURPLE,
  },
});
