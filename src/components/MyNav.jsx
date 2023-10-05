import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";

export default function MyNav() {
  let { productsInCart } = useContext(CartContext);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className="navbar-brand" to="/">
            Website Logo
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
              <NavLink to="/products/0/edit" className="nav-link">
                Add Product
              </NavLink>
              <NavLink to="/cart" className="nav-link">
                Cart
                {productsInCart.length > 0 && (
                  <sup className="p-1 bg-danger text-light rounded-pill">
                    {productsInCart.length}
                  </sup>
                )}
              </NavLink>
              {/* <NavLink to="/users" className="nav-link">
                Users
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
