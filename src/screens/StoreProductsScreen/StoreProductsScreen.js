import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Entypo, MaterialCommunityIcons} from '../../utils/icons';
import {GREY_MID, RED1, SOLID_BLACK} from '../../utils/colors';
import AppTextInput from '../../components/AppTextInput';
import {CategoriesArray} from '../../utils/constants';
import OvalCategories from '../../components/OvalCategories';
import PopularCard from '../../components/PopularCard';
import {categoryRef, productRef} from '../../firebase';
import Loader from '../../components/Loader';
import {getDocs} from 'firebase/firestore';
import {useCart} from '../../hooks/useCart';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {updateCart} from '../../store/features/cartSlice';

const StoreProductsScreen = ({navigation, route}) => {
  const storeInfo = route.params;
  const dispatch = useDispatch();
  const {handleCart} = useCart();
  const {cart} = useSelector(store => store.cart);

  const [loader, setLoader] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const renderItem = ({item}) => <OvalCategories item={item} />;

  const renderProductItem = ({item}) => (
    <PopularCard
      item={item}
      onCartPress={() =>
        handleCart(item, item.quantity == 0 ? 1 : item.quantity + 1)
      }
      onPress={() => navigation.navigate('ProductDetail', item)}
    />
  );

  useEffect(() => {
    getDocs(categoryRef)
      .then(snapshot => {
        let categories = [];

        snapshot.docs.forEach(el => {
          if (el.data().parentId == storeInfo.id)
            categories.push({...el.data(), id: el.id});
        });

        setCategories(categories);

        getDocs(productRef)
          .then(snapshot => {
            let products = [];

            snapshot.docs.forEach(el => {
              products.push({...el.data(), id: el.id, quantity: 0});
            });

            dispatch(updateCart(products));
          })
          .catch(err => {
            console.log('get products err', err);
            setLoader(false);
          });
      })
      .catch(err => {
        console.log('get store err', err);
        setLoader(false);
      });
  }, [storeInfo]);

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Entypo
          name="chevron-thin-left"
          size={34}
          color={SOLID_BLACK}
          onPress={() => navigation.goBack()}
        />
        <MaterialCommunityIcons
          name="cart"
          size={36}
          color={GREY_MID}
          onPress={() => navigation.navigate('CartStack')}
        />
      </View>

      <View style={styles.row2}>
        <Image
          source={{uri: storeInfo.image}}
          style={styles.img}
          resizeMode="stretch"
        />
        <Text style={styles.storeTxt}>{storeInfo.name}</Text>
      </View>

      <AppTextInput placeholder="Search Products and Categories" />
      {loader ? (
        <Loader indicatorStyle={styles.indicator} />
      ) : (
        <>
          <View style={styles.row3}>
            <Text style={styles.viewTxt}>View All categories</Text>
            <Entypo name="chevron-thin-right" size={14} color={RED1} />
          </View>

          <View>
            <FlatList
              horizontal
              data={categories}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
            />
          </View>

          <Text style={styles.popularTxt}>Popular Products</Text>

          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.row}
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={renderProductItem}
          />
        </>
      )}
    </View>
  );
};

export default StoreProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  img: {
    width: 100,
    height: 120,
    borderRadius: 8,
    marginRight: 20,
  },
  storeTxt: {
    fontWeight: '400',
    fontSize: 16,
    color: SOLID_BLACK,
  },

  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
  },
  viewTxt: {
    fontSize: 12,
    fontWeight: '400',
    color: RED1,
  },

  popularTxt: {
    marginVertical: 20,
    fontWeight: '400',
    fontSize: 24,
    color: SOLID_BLACK,
  },
});
