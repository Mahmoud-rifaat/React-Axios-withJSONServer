import "./App.css";
import { MyNav, Home, NotFound, Users, Cart } from "./components";
import { Products, ProductDetails, ProductForm } from "./components/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="users" element={<Users></Users>}></Route>
        <Route
          path="products/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="products/:id/edit"
          element={<ProductForm></ProductForm>}
        ></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
