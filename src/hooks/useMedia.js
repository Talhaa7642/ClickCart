import {useState} from 'react';
import {check, request, PERMISSIONS} from 'react-native-permissions';
import {isIOS, os_ver} from '../utils/platform';
import ImagePicker from 'react-native-image-crop-picker';

export const useMedia = () => {
  const [image, setImage] = useState({
    name: '',
    type: '',
    uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
  });

  const handleGalleryMedia = () => {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.99,
      forceJpg: true,
    })
      .then(el => {
        let obj = {
          name: el.path.split('/')[el.path.split('/').length - 1],
          type: el.mime,
          uri: el.path,
        };
        console.log('gallery obj', obj);
        setImage(obj);
      })
      .catch(err => console.log('gallery picker err:', err));
  };

  const handleCameraMedia = () => {
    ImagePicker.openCamera({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.99,
      forceJpg: true,
    })
      .then(el => {
        let obj = {
          name: el.path.split('/')[el.path.split('/').length - 1],
          type: el.mime,
          uri: el.path,
        };
        console.log('camera obj', obj);
        setImage(obj);
      })
      .catch(err => console.log('camera picker err:', err));
  };

  const handlePermissionCases = (res, mediaType) => {
    switch (res) {
      case 'denied':
        if (mediaType == 'camera') return handleGetCameraPermission(false);
        else return handleGetGalleryPermission(false);

      case 'granted':
        if (mediaType == 'camera') return handleGetCameraPermission(false);
        else return handleGetGalleryPermission(false);

      case 'blocked':
        // show message
        return 'blocked';

      case 'limited':
        return 'limited';

      case 'unavailable':
        return 'unavailable';
    }
  };

  const handleGetGalleryPermission = async (flag = true) => {
    let res = '';
    if (flag) {
      if (isIOS) {
        res = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      } else if (os_ver >= 31) {
        res = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      } else {
        res = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      }

      return handlePermissionCases(res, 'gallery');
    } else {
      if (isIOS) {
        res = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      } else if (os_ver >= 31) {
        res = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      } else {
        res = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      }

      if (res == 'granted') handleGalleryMedia();
    }
  };

  const handleGetCameraPermission = async (flag = true) => {
    let res = '';
    if (flag) {
      if (isIOS) {
        res = await check(PERMISSIONS.IOS.CAMERA);
      } else {
        res = await check(PERMISSIONS.ANDROID.CAMERA);
      }

      return handlePermissionCases(res, 'camera');
    } else {
      if (isIOS) {
        res = await request(PERMISSIONS.IOS.CAMERA);
      } else {
        res = await request(PERMISSIONS.ANDROID.CAMERA);
      }

      if (res == 'granted') handleCameraMedia();
    }
  };

  return {
    handleGetGalleryPermission,
    handleGetCameraPermission,
    image,
    setImage,
  };
};
