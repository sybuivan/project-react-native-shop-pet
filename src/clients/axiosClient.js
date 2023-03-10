import axios from 'axios';

const dev = 'http://192.168.1.5:5000/api';
const production = 'https://monashop-pet.onrender.com/api';

const axiosClient = axios.create({
  baseURL: dev,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const {msg} = error.response
    console.log('messageError', error.message);
    return Promise.reject(error);
  },
);
export default axiosClient;
