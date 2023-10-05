import axios from "axios";

let baseURL = "http://localhost:3005/products";

let getAllProducts = () => axios.get(baseURL);
let getProductById = (productId) => axios.get(`${baseURL}/${productId}`);
let addNewProduct = (product) => axios.post(baseURL, product);
let editProduct = (productId, product) =>
  axios.put(`${baseURL}/${productId}`, product);
let deleteProduct = (productId) => axios.delete(`${baseURL}/${productId}`);

export {
  getAllProducts,
  getProductById,
  addNewProduct,
  editProduct,
  deleteProduct,
};
