import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getProductById } from "../../API/productsWithAxios";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export default function ProductDetails() {
  let { addProductToCart } = useContext(CartContext);

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);

  return (
    <div className="container text-light bg-dark p-5 my-4 rounded">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={product.image}
            alt=""
            className="w-100 rounded"
            style={{ height: "350px", objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-6 text-center">
          <h2>Product Details</h2>
          <p>Product name: {product.title}</p>
          <p>Product category: {product.category}</p>
          <p>Product price: {product.price}</p>
          <p>Product quantity: {product.rating?.count}</p>
          <NavLink
            to="/products"
            className="btn btn-success m-4 d-block"
            onClick={() => addProductToCart(product.id)}
          >
            Add To Cart
          </NavLink>
          <NavLink to="/products" className="btn btn-warning m-4 d-block">
            Back To all Products
          </NavLink>
        </div>
      </div>
    </div>
  );
}
