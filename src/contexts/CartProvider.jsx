import React, { useState } from "react";
import { CartContext } from "./cartContext";

export function CartProvider(props) {
  let [productsInCart, setProductsInCart] = useState([]);

  let addProductToCart = (productId) => {
    setProductsInCart([...productsInCart, productId]);
  };

  let removeProductFromCart = (productId) => {
    setProductsInCart(
      productsInCart.filter((product) => product !== productId)
    );
  };

  let cart = {
    productsInCart,
    addProductToCart,
    removeProductFromCart,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
}
