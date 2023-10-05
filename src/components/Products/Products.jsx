import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

export default function Products() {
  // Getting the products list using a custom hook
  let [reRender, setReRender] = useState(false);
  let [productsList, isLoading] = useProducts(reRender);

  return (
    <div className="row text-center mx-3 my-5 gap-3 justify-content-center">
      <h2>Our Products</h2>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && productsList.length > 0 ? (
        productsList.map((product, index) => {
          return (
            <ProductCard
              product={product}
              rerender={setReRender}
              key={product.id}
            />
          );
        })
      ) : (
        <h2 className="mt-5">No Products to show</h2>
      )}
    </div>
  );
}
