import {Platform} from 'react-native';

export const isAndroid = Platform.OS == 'android';
export const isIOS = Platform.OS == 'ios';
export const os_ver = Platform.Version;
