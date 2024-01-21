import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Shop = () => {
  return (
    <div className="newProduct">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-tittle mb-70">
              <h2>Watch Shop</h2>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="product-img">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
                alt=""
              />
            </div>
            <div className="product-caption">
              <NavLink to="details">
                <h3>Thermo Ball Etip Gloves</h3>
              </NavLink>
              <span>$ 45,743</span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="product-img">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
                alt=""
              />
            </div>
            <div className="product-caption">
              <NavLink to="details">
                <h3>Thermo Ball Etip Gloves</h3>
              </NavLink>
              <span>$ 45,743</span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="product-img">
              <img
                src="	https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
                alt=""
              />
            </div>
            <div className="product-caption">
              <NavLink to="details">
                <h3>Thermo Ball Etip Gloves</h3>
              </NavLink>
              <span>$ 45,743</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
