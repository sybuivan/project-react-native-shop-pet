import axiosClient from './axiosClient';

const productApi = {
  getProductByCategory(params) {
    const url = `/product/${params}`;
    return axiosClient.get(url, params);
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
  getAllProductsByCateogry(idCategory) {
    return axiosClient.get(`/products/${idCategory}`);
  },
};

export default productApi;
