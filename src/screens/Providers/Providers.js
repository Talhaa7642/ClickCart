import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {WHITE} from '../../utils/colors';
import {deleteDoc, doc, getDocs, onSnapshot} from 'firebase/firestore';
import {db, storeRef, userRef} from '../../firebase';
import Loader from '../../components/Loader';
import FastImage from 'react-native-fast-image';
import Toast from 'react-native-simple-toast';
import Header from '../../components/Header';

const Providers = () => {
  const [loader, setLoader] = useState(true);
  const [providers, setProviders] = useState([]);
  const [stores, setStores] = useState([]);

  const renderItem = ({item}) => (
    <View>
      <View style={styles.row}>
        <View style={styles.row1}>
          <FastImage
            source={{uri: item.image}}
            style={styles.img}
            resizeMode="cover"
          />
          <View style={{marginLeft: 20}}>
            <Text style={styles.txt}>{item.name}</Text>
            <Text style={styles.txt}>{item.address}</Text>
          </View>
        </View>

        <Text onPress={() => handleDelete(item.id)} style={styles.delTxt}>
          Delete
        </Text>
      </View>
      <View style={styles.bar} />
    </View>
  );

  useEffect(() => {
    onSnapshot(userRef, snapshot => {
      let providers = [];
      snapshot.docs.forEach(el => {
        if (el.data().role == 'shopkeeper') {
          providers.push({...el.data(), id: el.id});
        }
      });
      setProviders(providers);

      onSnapshot(storeRef, snapshot => {
        let stores = [];
        snapshot.docs.forEach(el => {
          stores.push({...el.data(), id: el.id});
        });
        setStores(stores);
        setLoader(false);
      });
    });
  }, []);

  const handleDelete = id => {
    const docRef = doc(db, 'stores', id);
    deleteDoc(docRef)
      .then(doc => {
        Toast.show('Provider deleted successfully');
        console.log('doc', doc);
      })
      .catch(err => console.log('delete doc err', err));
  };

  return (
    <View style={styles.container}>
      <Header />
      {loader ? (
        <Loader indicatorStyle={styles.indicator} />
      ) : (
        <FlatList
          data={stores}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Providers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  txt: {
    fontSize: 16,
    color: 'black',
  },
  delTxt: {
    padding: 8,
    fontSize: 16,
    color: 'red',
  },
  bar: {
    marginVertical: '4%',
    height: 1,
    backgroundColor: 'gray',
  },
});
