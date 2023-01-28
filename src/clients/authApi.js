import {Alert} from 'react-native';
import axiosClient from './axiosClient';

const authApi = {
  register: async data => {
    return await axiosClient.post('/register', data);
  },
  login: async data => {
    return await axiosClient.post('/login', data);
  },
  updateUser: async data => {
    return await axiosClient.put('/update-user', data);
  },
};

export default authApi;
