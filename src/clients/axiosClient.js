import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api',
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

    const {data, config, status} = error.response;
    console.log('error ', error.response);
    const URLS = ['/register', '/login'];
    if (URLS.includes(config.url) && status === 401) {
      const messageError = data.msg || '';

      console.log('messageError', messageError);
      throw new Error(messageError);
    }
    return Promise.reject(error);
  },
);
export default axiosClient;
