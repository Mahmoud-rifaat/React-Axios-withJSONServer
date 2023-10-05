import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import { Table } from "react-bootstrap";
import { getProductById } from "../API/productsWithAxios";

export default function Cart() {
  let { productsInCart, removeProductFromCart } = useContext(CartContext);
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productPromises = productsInCart.map((productId) =>
          getProductById(productId)
        );
        const productsData = await Promise.all(productPromises);
        setProducts(productsData.map((response) => response.data));
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [productsInCart]);

  // Removing a product from cart
  let removeProduct = (productId) => {
    removeProductFromCart(productId);
  };

  return (
    <div className="bg-light p-5 text-center ">
      <p>There are {productsInCart.length} Products in our cart</p>
      {products.length > 0 ? (
        <Table striped="columns">
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Title</th>
              <th>Product Category</th>
              <th>Product Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(product.id)}
                  >
                    Remove From Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <></>
      )}
    </div>
  );
}
