import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {GREY_MID, SOLID_BLACK, WHITE} from '../../utils/colors';
import AppTextInput from '../../components/AppTextInput';
import {MaterialCommunityIcons} from '../../utils/icons';
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import {getDocs} from 'firebase/firestore';
import {storeRef} from '../../firebase';
import Loader from '../../components/Loader';
import Categories from '../../components/categories';

const SearchStore = ({navigation}) => {
  const [stores, setStores] = useState([]);
  const [loader, setLoader] = useState(true);
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const renderItemV = ({item}) => (
    <Categories
      store
      onPress={() => handleNavigate(item)}
      onStorePress={() => handleNavigate(item)}
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

  useEffect(() => {
    if (query.length >= 2) {
      let filtered = stores.filter(el => {
        if (el.name.toLowerCase().includes(query.toLowerCase())) return el;
      });
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [query]);

  const handleNavigate = item => {
    navigation.navigate('BottomTabNavigator', {
      screen: 'StoreScreen',
      params: {
        item,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <AppTextInput
          placeholder="iPhone 13 pro"
          textInputStyle={{flex: 0.85}}
          value={query}
          onChangeText={setQuery}
        />
        <MaterialCommunityIcons
          name="tune-vertical"
          size={30}
          color={SOLID_BLACK}
          style={{marginLeft: 10}}
        />
      </View>

      <View
        style={[styles.row, {justifyContent: 'space-between', marginTop: 10}]}>
        <Text style={styles.txt}>Recent searches</Text>
        <Text style={styles.txt}>Clear All</Text>
      </View>
      <Divider space="5%" />

      {loader ? (
        <Loader indicatorStyle={styles.indicator} />
      ) : filteredItems.length > 0 ? (
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.row}
          data={filteredItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItemV}
        />
      ) : (
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.row1}
          data={stores}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItemV}
        />
      )}
    </View>
  );
};

export default SearchStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    backgroundColor: WHITE,
    paddingBottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row1: {
    flex: 1,
    justifyContent: 'space-around',
  },
  txt: {
    fontWeight: '600',
    fontSize: 12,
    color: GREY_MID,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
