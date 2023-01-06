import axiosClient from './axiosClient';

const productApi = {
  async getProductByCategory(params) {
    const url = `/product/${params}`;
    return await axiosClient.get(url, params);
  },

  getDetailProduct(id) {
    const url = `/product-detail/${id}`;
    return axiosClient.get(url);
  },

  getDetailImages(id) {
    const url = `/product-detail-images/${id}`;
    return axiosClient.get(url);
  },

  getAllProductsByParams(params) {
    return axiosClient.get('/products/', {params: params});
  },
  async getAllProductsByCateogry(idCategory) {
    // console.log('idCategory', idCategory);
    return await axiosClient.get(`/products/${idCategory}`);
  },
};

export default productApi;
