import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../API/productsWithAxios";

export default function ProductCard(props) {
  let navigate = useNavigate();

  function removeProduct(productId) {
    deleteProduct(productId);

    props.rerender((prevValue) => !prevValue);
  }

  return (
    <div
      className="card col-lg-3 col-md-5 col-sm-12"
      style={{ height: "500px" }}
    >
      <img
        src={props.product.image}
        className="card-img-top"
        alt={props.product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body row align-items-end">
        <h5 className="card-title">{props.product.title}</h5>
        <h5 className="card-title">{props.product.id}</h5>
        <p className="card-text">Price: {props.product.price}</p>
        <p className="card-text">Quantity: {props.product.rating.count}</p>

        <div className="card-btn-group">
          {props.product.rating.count > 0 ? (
            <>
              <NavLink
                to={`/products/${props.product.id}`}
                className="btn btn-info m-1"
              >
                View
              </NavLink>
              <NavLink
                to={`/products/${props.product.id}/edit`}
                className="btn btn-warning m-1"
              >
                Edit
              </NavLink>
              <button
                className="btn btn-danger m-1"
                onClick={() => removeProduct(props.product.id)}
              >
                Delete
              </button>
            </>
          ) : (
            <button className="btn btn-warning">Sold Out</button>
          )}
        </div>
      </div>
    </div>
  );
}
