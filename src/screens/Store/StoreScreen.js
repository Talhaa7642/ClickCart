import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AppTextInput from '../../components/AppTextInput';
import {MID_BLUE} from '../../utils/colors';
import {CategoriesArray} from '../../utils/constants';
import Categories from '../../components/categories';
import {getDocs} from 'firebase/firestore';
import {storeRef} from '../../firebase';
import Loader from '../../components/Loader';

const StoreScreen = ({navigation}) => {
  const [loader, setLoader] = useState(true);
  const [stores, setStores] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(CategoriesArray);

  const renderItemV = ({item}) => (
    <Categories
      store
      onPress={() => navigation.navigate('StoreProductsScreen', item)}
      onStorePress={() => navigation.navigate('StoreProductsScreen', item)}
      name={item.name}
      serviceName={item.name}
      serviceImage={item.image}
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
        setLoader(false);
      })
      .catch(err => {
        console.log('get store err', err);
        setLoader(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>

      <AppTextInput placeholder="Search A Store or Product" />
      {loader ? (
        <Loader indicatorStyle={styles.indicator} />
      ) : (
        <>
          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.row}
            data={stores}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItemV}
          />
        </>
      )}
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: MID_BLUE,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
