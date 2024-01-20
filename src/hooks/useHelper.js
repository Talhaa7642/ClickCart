import {Platform} from 'react-native';
import {PERMISSIONS, check, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export const useHelper = () => {
  const ios = Platform.OS == 'ios';
  const android = Platform.OS == 'android';
  const os_ver = Platform.constants.Release;

  const handleLocation = () => {
    if (ios) {
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        .then(res => {
          console.log('check res', res);
          request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            .then(res => {
              console.log('request res', res);
              if (res == 'granted') {
                handleLocationCoords(res);
              }
            })
            .catch(err => console.log('request err', err));
        })
        .catch(err => console.log('check err', err));
    } else if (android) {
      if (os_ver <= 10) {
        check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
          .then(res => {
            console.log('check res', res);
            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
              .then(res => {
                console.log('request res', res);
                if (res == 'granted') {
                  handleLocationCoords(res);
                }
              })
              .catch(err => console.log('request err', err));
          })
          .catch(err => console.log('check err', err));
      } else {
        check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION)
          .then(res => {
            console.log('check res', res);
            request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION)
              .then(res => {
                console.log('request res', res);
                if (res == 'granted') {
                  handleLocationCoords(res);
                }
              })
              .catch(err => console.log('request err', err));
          })
          .catch(err => console.log('check err', err));
      }
    }
  };

  const handleLocationCoords = async result => {
    if (result == 'granted') {
      Geolocation.getCurrentPosition(
        position => {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          if (lat != undefined && lng != undefined) {
            console.log(lat, lng);
          } else {
            console.log('Could not get latitude and longitude.');
          }
        //   setLat(lat);
        //   setLng(lng);
        },
        err => {
          if (err.code == 1) {
            console.log('Location permission is not granted');
          } else if (err.code == 2) {
            console.log('Location provider is not available');
          } else if (err.code == 4) {
            console.log(
              'Google play service is not installed or has an older version',
            );
          } else {
            console.log(err?.message);
          }
        },
        {
          accuracy: {
            ios: 'best',
            android: 'high',
          },
          enableHighAccuracy: false,
          distanceFilter: 0,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    }
  };

  return {handleLocation, handleLocationCoords};
};
