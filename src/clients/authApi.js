import {Alert} from 'react-native';
import axiosClient from './axiosClient';

const authApi = {
  register: async data => {
    console.log('data register', data);
    return await axiosClient.post('/register', data);
  },
  login: async data => {
    console.log('data axios ', data);
    return await axiosClient.post('/login', data);
  },
};

export default authApi;
