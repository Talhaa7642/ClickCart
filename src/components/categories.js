import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from 'react-native';
import {BLACK0, LIGHT_GREY1, SOLID_BLACK, WHITE} from '../utils/colors';
import Circle from './Circle';
import {AntDesign} from '../utils/icons';
import SmallButton from './SmallButton';

const Categories = props => {
  return (
    <View
      style={[styles.categoryContainer, props.store && {marginBottom: '10%'}]}>
      <TouchableOpacity onPress={props.onPress} style={styles.card}>
        <ImageBackground
          style={styles.categoryImage}
          source={{uri: props.serviceImage}}>
          {props.fav ? (
            <Circle
              size={34}
              containerStyle={{alignSelf: 'flex-end', margin: 8}}>
              <AntDesign name="hearto" size={20} color={SOLID_BLACK} />
            </Circle>
          ) : null}

          {/* <Text style={styles.name}>{props.name}</Text> */}

          <SmallButton title={props.name} onPress={props.onStorePress} />
        </ImageBackground>
      </TouchableOpacity>
      {props.store ? null : (
        <Text style={styles.serviceName}>{props.serviceName}</Text>
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    height: 245,
    width: '45%',
    marginBottom: '15%',
  },
  card: {
    width: '100%',
    height: '100%',
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000000',
    overflow: 'hidden',
    shadowOpacity: 0.2,
    borderRadius: 20,
  },
  categoryImage: {
    height: '100%', // Adjust the height based on your design
    width: '100%', // Take up the full width
    borderRadius: 20,
  },
  name: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 16, // Adjust the font size based on your design
    fontWeight: '400',
    color: BLACK0,
  },
  serviceName: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 18,
    fontWeight: '500',
    color: BLACK0,
  },
});
