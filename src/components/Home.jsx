import React from "react";
import "./Home.css";
import p1 from "../../src/assets/images/product1.jpg";
import p2 from "../../src/assets/images/product2.jpg";
import p3 from "../../src/assets/images/product3.jpg";

export default function Home() {
  return (
    <div className="">
      <section className="hero">
        <div className="container">
          <h1>Welcome to our eCommerce Store</h1>
          <p>Discover a wide range of products at great prices</p>
          <a className="btn btn-primary" href="#">
            Shop Now
          </a>
        </div>
      </section>

      <section className="product-section">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="product">
                <img src={p1} alt="Product 1" />
                <h3>Product 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className="btn btn-secondary" href="#">
                  View Details
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product">
                <img src={p2} alt="Product 2" />
                <h3>Product 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className="btn btn-secondary" href="#">
                  View Details
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product">
                <img src={p3} alt="Product 3" />
                <h3>Product 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a className="btn btn-secondary" href="#">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
