import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BLACK1, MID_YELLOW, RED1, SOLID_BLACK, WHITE} from '../../utils/colors';
import SmallButton from '../../components/SmallButton';
import QuantityBtn from '../../components/QuantityBtn';
import Header from '../../components/Header';
import SearchSvg from '../../assets/Svgs/SearchSvg';
import {AntDesign} from '../../utils/icons';
import Divider from '../../components/Divider';
import {Rating} from 'react-native-ratings';

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
      <Header />
      <Image source={item.image} style={styles.img} resizeMode="cover" />
      <View style={styles.row}>
        <Text style={styles.nameTxt}>{item.name}</Text>
        <AntDesign name="heart" size={20} color={RED1} />
      </View>
      <Text style={styles.descTxt}>{item.desc}</Text>

      <View style={styles.row1}>
        <Rating ratingCount={5} imageSize={20} style={{paddingVertical: 10}} />
        <Text style={styles.ratingTxt}>4.5</Text>
        <Text style={styles.reviewTxt}>(2,500 reviews)</Text>
      </View>

      <Text style={styles.priceTxt}>Rs. 260</Text>
      <Divider />
      <View style={{alignSelf: 'flex-end'}}>
        <QuantityBtn
          onMinusPress={handleDecreament}
          onPlusPress={handleIncreament}
          quantity={qty}
        />
      </View>
      <SmallButton
        title="Add to Cart"
        titleStyle={styles.titleStyle}
        btnStyle={styles.btnStyle}
      />
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameTxt: {
    marginVertical: 14,
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
    marginTop: 14,
    fontWeight: '700',
    fontSize: 24,
    color: BLACK1,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: WHITE,
  },
  btnStyle: {
    padding: 14,
    backgroundColor: MID_YELLOW,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTxt: {
    fontWeight: '600',
    fontSize: 14,
    color: SOLID_BLACK,
    marginHorizontal: 4,
  },
  reviewTxt: {
    fontWeight: '400',
    fontSize: 14,
    color: SOLID_BLACK,
  },
});
