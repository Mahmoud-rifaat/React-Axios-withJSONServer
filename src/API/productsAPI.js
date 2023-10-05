import { products } from "../models/productsList";

let getAllProducts = () => {
  return products;
};

let getProductById = (productId) => {
  return products.find((product) => product.id == productId);
};

let addNewProduct = (product) => {
  products.push({
    ...product,
    id: products.length + 1,
    rating: { rate: 3.9, count: product.quantity },
  });
};

let editProduct = (productId, productAfterEdit) => {
  let productIndex = products.findIndex((product) => product.id == productId);

  products[productIndex] = productAfterEdit;
};

let deleteProduct = (productId) => {
  products.filter((product) => product.id != productId);
};

export {
  getAllProducts,
  getProductById,
  addNewProduct,
  editProduct,
  deleteProduct,
};
