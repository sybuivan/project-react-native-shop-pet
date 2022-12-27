import axiosClient from './axiosClient';

const checkoutApi = {
  payMethod(params) {
    const url = '/checkout';
    return axiosClient.post(url, {params: params});
  },

  orderDetails(params) {
    const url = '/orders/details';
    return axiosClient.post(url, {params: params});
  },

  getIdOrder() {
    const url = '/orders/getIdOrder';
    return axiosClient.get(url);
  },
};

export default checkoutApi;
