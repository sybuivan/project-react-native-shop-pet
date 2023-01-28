import axiosClient from './axiosClient';

const checkoutApi = {
  async addToCart(body) {
    return await axiosClient.post('/add-to-cart', body);
  },

  async getCartIdUser(idUser) {
    return await axiosClient.get(`/get-carts/${idUser}`);
  },
  payMethod(params) {
    const url = '/checkout';
    return axiosClient.post(url, {params: params});
  },

  async orderDetails(params) {
    const url = '/orders/details';
    console.log(params);
    return await axiosClient.post(url, {params: params});
  },

  getIdOrder() {
    const url = '/orders/getIdOrder';
    return axiosClient.get(url);
  },

  async deleteCart(params) {
    return axiosClient.delete(`/delete-cart`, {params});
  },

  async getOrdersUser(idUser, params) {
    return axiosClient.get(`/get-order-user/${idUser}`, {params});
  },
  async getOrdersDetals(idOrder) {
    return axiosClient.get(`/get-order-details/${idOrder}`);
  },
  async deleteOrder(idOrder) {
    return axiosClient.delete(`/get-order-details/${idOrder}`);
  },
};

export default checkoutApi;
