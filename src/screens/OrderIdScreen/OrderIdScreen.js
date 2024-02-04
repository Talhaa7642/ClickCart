import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLACK1, MID_YELLOW, WHITE} from '../../utils/colors';
import Header from '../../components/Header';

const OrderIdScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <View style={styles.box1}>
          <Text style={styles.txt1}>Save order ID</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.txt2}>123456789</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderIdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
    backgroundColor: WHITE,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 330,
    height: 190,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
    backgroundColor: MID_YELLOW,
  },
  txt1: {
    fontWeight: '700',
    fontSize: 24,
    color: WHITE,
  },
  box2: {
    width: 330,
    height: 100,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: BLACK1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  txt2: {
    fontWeight: '700',
    fontSize: 20,
    color: BLACK1,
  },
});
