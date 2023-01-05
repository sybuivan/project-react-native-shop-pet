import {Alert} from 'react-native';
import axiosClient from './axiosClient';

const authApi = {
  register: async data => {
    const url = '/register';

    return await axiosClient.post(url, data);
  },
  login: async data => {
    const url = '/login';
    Alert.alert(JSON.stringify(data));
    return await axiosClient.post(url, data);
  },
};

export default authApi;
