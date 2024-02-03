import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BLACK1, SOLID_BLACK, WHITE} from '../../utils/colors';
import SmallButton from '../../components/SmallButton';
import QuantityBtn from '../../components/QuantityBtn';

const ProductDetail = ({route}) => {
  const item = route.params;

  const [qty, setQty] = useState(0);

  const handleIncreament = () => {
    setQty(qty + 1);
  };
  const handleDecreament = () => {
    setQty(qty - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.img} resizeMode="cover" />
      <Text style={styles.nameTxt}>{item.name}</Text>
      <Text style={styles.descTxt}>{item.desc}</Text>
      <Text style={styles.priceTxt}>Rs. 260</Text>
      <View style={{alignSelf: 'flex-end'}}>
        <QuantityBtn
          onMinusPress={handleDecreament}
          onPlusPress={handleIncreament}
          quantity={qty}
        />
      </View>
      <SmallButton title="Add to Cart" />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    backgroundColor: WHITE,
    paddingBottom: 0,
  },
  img: {
    height: '30%',
    width: '50%',
    alignSelf: 'center',
  },
  nameTxt: {
    fontWeight: '700',
    fontSize: 24,
    color: SOLID_BLACK,
  },
  descTxt: {
    fontWeight: '400',
    fontSize: 16,
    color: SOLID_BLACK,
  },
  priceTxt: {
    fontWeight: '700',
    fontSize: 24,
    color: BLACK1,
  },
});
