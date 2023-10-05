import React, { useEffect, useState } from "react";
import {
  addNewProduct,
  editProduct,
  getProductById,
} from "../../API/productsWithAxios";
import { useNavigate, useParams } from "react-router-dom";

export function ProductForm() {
  let navigate = useNavigate();
  let productData = {
    title: "",
    category: "",
    price: "",
    quantity: "",
    image: "",
  };

  const [formsValues, setFormsValues] = useState(productData);

  let { id } = useParams();

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await getProductById(id);
        setFormsValues({
          ...response.data,
          quantity: response.data.rating.count,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (id != 0) {
      fetchData();
    } else {
      setFormsValues(productData);
    }
  }, [id]);

  let getInputValues = (e) => {
    setFormsValues({ ...formsValues, [e.target.name]: e.target.value });
  };

  let formOperation = (e) => {
    e.preventDefault();

    let productToSubmit = {
      title: formsValues.title,
      price: formsValues.price,
      category: formsValues.category,
      image: formsValues.image,
      rating: {
        rate: 2.9,
        count: formsValues.quantity,
      },
    };

    if (id == 0) {
      addNewProduct(productToSubmit);
    } else {
      editProduct(id, productToSubmit);
    }
    navigate("/products");
  };

  return (
    <div className="container mt-5 text-center">
      {id == 0 ? <h1>Add new product</h1> : <h1>Edit product</h1>}

      <form onSubmit={formOperation}>
        <input
          onChange={getInputValues}
          name="title"
          value={formsValues.title}
          type="text"
          placeholder="Enter product title"
          className="form-control w-50 mx-auto m-3"
        />
        <input
          onChange={getInputValues}
          name="category"
          value={formsValues.category}
          type="text"
          placeholder="Enter product category"
          className="form-control w-50 mx-auto m-3"
        />
        <input
          onChange={getInputValues}
          name="price"
          value={formsValues.price}
          type="text"
          placeholder="Enter product price"
          className="form-control w-50 mx-auto m-3"
        />
        <input
          onChange={getInputValues}
          name="quantity"
          value={formsValues.quantity}
          type="text"
          placeholder="Enter product quantity"
          className="form-control w-50 mx-auto m-3"
        />
        <input
          onChange={getInputValues}
          name="image"
          value={formsValues.image}
          type="text"
          placeholder="Enter product image url"
          className="form-control w-50 mx-auto m-3"
        />

        <button className="btn btn-success w-20 mx-auto m-3">
          {id === "0" ? "Add" : "Edit"}
        </button>
      </form>
    </div>
  );
}
