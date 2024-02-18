import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {GREY_MID, SOLID_BLACK, WHITE} from '../../utils/colors';
import Categories from '../../components/categories';
import ShopsCard from '../../components/ShopsCard';
import MenuSvg from '../../assets/Svgs/MenuSvg';
import Avatar from '../../components/Avatar';
import AppTextInput from '../../components/AppTextInput';
import Circle from '../../components/Circle';
import {getDocs} from 'firebase/firestore';
import {categoryRef, storeRef} from '../../firebase';
import Loader from '../../components/Loader';

const HomeScreen = ({navigation, route}) => {
  const [loader, setLoader] = useState(true);
  const [stores, setStores] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredStores, setFilteredStores] = useState([]);

  const renderItemH = ({item}) => (
    <ShopsCard
      item={item}
      onPress={() => navigation.navigate('ServiceProviderScreen', item.name)}
    />
  );

  const renderItemV = ({item}) => (
    <Categories
      fav
      name={item.name}
      serviceImage={item.image}
      onPress={() => navigation.navigate('StoreProductsScreen', item)}
      onStorePress={() => navigation.navigate('StoreProductsScreen', item)}
    />
  );

  useEffect(() => {
    getDocs(storeRef)
      .then(snapshot => {
        let stores = [];
        snapshot.docs.forEach(el => {
          stores.push({...el.data(), id: el.id});
        });
        setStores(stores);
        setFilteredStores(stores);

        getDocs(categoryRef)
          .then(snapshot => {
            let categories = [];
            snapshot.docs.forEach(el => {
              categories.push({...el.data(), id: el.id});
            });
            setCategories(categories);
            setLoader(false);
          })
          .catch(err => {
            console.log('get store err', err);
            setLoader(false);
          });
      })
      .catch(err => {
        console.log('get store err', err);
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      let filtered = stores.filter(el => {
        if (el.name.toLowerCase().includes(query.toLowerCase())) return el;
      });

      setFilteredStores(filtered);
    } else {
      setFilteredStores([]);
    }
  }, [query]);

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Circle>
          <MenuSvg />
        </Circle>
        <Avatar
          uri={require('../../assets/images/carpenter.png')}
          onPress={() => navigation.navigate('ProfileScreen')}
        />
      </View>

      <AppTextInput
        placeholder="Search A Store or Product"
        value={query}
        onChangeText={setQuery}
      />
      {loader ? (
        <Loader indicatorStyle={styles.indicator} />
      ) : (
        <>
          <View style={styles.row1}>
            <Text
              onPress={() => navigation.navigate('StoreScreen')}
              style={styles.catTxt}>
              Categories
            </Text>
            <Text style={styles.viewTxt}>view all</Text>
          </View>

          <FlatList
            horizontal
            data={categories}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItemH}
          />

          {filteredStores.length > 0 ? (
            <FlatList
              numColumns={2}
              columnWrapperStyle={styles.row}
              data={filteredStores}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItemV}
            />
          ) : (
            <FlatList
              numColumns={2}
              columnWrapperStyle={styles.row}
              data={stores}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItemV}
            />
          )}
        </>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  services: {
    alignSelf: 'center',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9CCBBF',
    borderRadius: 20,
    paddingHorizontal: '2%',
    marginVertical: '2%',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  loactionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    // backgroundColor: 'green',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  catTxt: {
    color: SOLID_BLACK,
    fontSize: 18,
    fontWeight: '400',
  },
  viewTxt: {
    color: GREY_MID,
    fontSize: 12,
    fontWeight: '400',
  },
  categories: {
    // flex: 1,
    backgroundColor: WHITE,
    padding: '5%',
    // flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // marginHorizontal: 40,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
