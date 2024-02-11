import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';
import {LIGHT_GREY1, MID_YELLOW, SOLID_BLACK} from '../../utils/colors';
import SmallButton from '../../components/SmallButton';
import {addDoc, serverTimestamp} from 'firebase/firestore';
import {storage, storeRef} from '../../firebase';
import {EvilIcons} from '../../utils/icons';
import {useMedia} from '../../hooks/useMedia';
import Toast from 'react-native-simple-toast';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {useSelector} from 'react-redux';

const AddStore = ({route}) => {
  const storeInfo = route.params;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [loader, setLoader] = useState(false);

  const {user} = useSelector(store => store.user);

  const {
    handleGetCameraPermission,
    handleGetGalleryPermission,
    image,
    setImage,
  } = useMedia();

  useEffect(() => {
    if (storeInfo) {
      setName(storeInfo.name);
      setAddress(storeInfo.address);
      setImage({
        uri: storeInfo.image,
      });
    }
  }, []);

  const handleSubmit = async () => {
    if (name != '' && address != '' && image.type != '') {
      setLoader(true);
      try {
        const imageRef = ref(storage, `images/store/${image.name}`);

        const response = await fetch(image.uri);
        const blob = await response.blob();

        const metadata = {
          contentType: image.type,
        };

        const imageRes = await uploadBytes(imageRef, blob, metadata);
        const url = await getDownloadURL(imageRes.ref);

        const payload = {
          uid: user.uid,
          name,
          address,
          image: url,
          createdAt: serverTimestamp(),
        };

        await addDoc(storeRef, payload);

        Toast.showWithGravity(
          'Store added successfully',
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } catch (err) {
        console.log('addDoc err', err);
      } finally {
        setLoader(false);
      }
    } else {
      Toast.showWithGravity(
        'Please select image, name and address',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Store Information" />
      <View style={styles.row}>
        <Text style={styles.txt}>Store Information</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.txt}>Store logo</Text>
        <Image
          source={{uri: image.uri}}
          style={styles.logoImg}
          resizeMode="cover"
        />
      </View>

      <AppTextInput
        hideIcon
        placeholder="Enter Name"
        inputStyle={{marginBottom: '1%'}}
        value={name}
        onChangeText={setName}
      />
      <AppTextInput
        hideIcon
        placeholder="Enter Address"
        inputStyle={{marginBottom: '5%'}}
        value={address}
        onChangeText={setAddress}
      />

      <View style={styles.row}>
        <Pressable style={styles.row1} onPress={handleGetGalleryPermission}>
          <EvilIcons name="image" size={30} color={SOLID_BLACK} />
          <Text style={styles.txt1}>Upload Photos</Text>
        </Pressable>

        <Pressable style={styles.row1} onPress={handleGetCameraPermission}>
          <EvilIcons name="camera" size={30} color={SOLID_BLACK} />
          <Text style={styles.txt1}>Upload Photos</Text>
        </Pressable>
      </View>

      {storeInfo?.name ? null : (
        <SmallButton
          loader={loader}
          onPress={handleSubmit}
          title="Submit"
          btnStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
        />
      )}
    </View>
  );
};

export default AddStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    paddingBottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  txt: {
    fontWeight: '400',
    fontSize: 20,
    color: SOLID_BLACK,
  },
  btnStyle: {
    padding: 14,
    marginHorizontal: '4%',
    backgroundColor: MID_YELLOW,
  },
  titleStyle: {
    fontWeight: '800',
    fontSize: 14,
    color: SOLID_BLACK,
  },
  txt1: {
    marginTop: '2%',
    fontWeight: '400',
    fontSize: 14,
    color: SOLID_BLACK,
  },
  row1: {
    backgroundColor: LIGHT_GREY1,
    padding: 8,
    width: '45%',
    height: '70%',
    borderRadius: 8,
    marginVertical: '14%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
  },
  img: {
    width: '100%',
    height: '40%',
  },
});
