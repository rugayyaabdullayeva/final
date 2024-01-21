import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.scss";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { MainContext } from "../context/ContextProvider";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const { products, fetchProducts } = useContext(MainContext);

  const addToWishlist = async (product) => {
    try {
      await axios.post("http://localhost:8080/wishlist", {
        img: product?.img,
        title: product?.title,
        price: product?.price,
      });
      toast.success("Product added to wishlist successfully.");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    fetchProducts();
    toast.success("Product deleted successfully");
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div id="section1">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="container">
          <div className="wrapper">
            <div className="hero-caption">
              <h1 className="hero-caption-title">
                Select Your New Perfect Style
              </h1>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat is aute irure.
              </p>
              <NavLink className="hero-btn">Shop Now</NavLink>
            </div>
            <div>
              <img
                src="	https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="newProduct">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-tittle mb-5">
                <h2>New Arrivals</h2>
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

      <div className="popular-items">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-5 text-center">
                <h2>Popular Items</h2>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
              </div>
              <div className="d-flex mb-5 w-50 gap-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button className="btn btn-secondary">Search</button>
              </div>
            </div>
          </div>

          <div className="row">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
              >
                <div className="single-popular-items mb-4 text-center">
                  <div className="popular-img">
                    <img src={product.img} alt={product.title} />
                    <div className="img-cap d-flex justify-content-between m-5">
                      <button
                        className="btn btn-danger"
                        onClick={() => addToWishlist(product)}
                      >
                        Add to Wishlist
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product?._id)}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="favorit-items"></div>
                  </div>
                  <div className="popular-caption">
                    <h3>
                      <Link to={`/${product._id}`}>{product.title}</Link>
                    </h3>
                    <span>${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row text-center">
            <div className="room-btn">
              <NavLink to="details">View More Products</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="watch-area">
        <div className="container">
          <div className="watch-area-p row d-flex justify-content-center d-flex align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="watch-details mb-4">
                <h2>Watch of Choice</h2>
                <p>
                  Enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse.
                </p>
                <NavLink className="hero-btn">Show Watches</NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="choice-watch-img mb-4">
                <img
                  src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center d-flex align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="choice-watch-img mb-4">
                <img
                  src="	https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="watch-details mb-4">
                <h2>Watch of Choice</h2>
                <p>
                  Enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse.
                </p>
                <NavLink className="hero-btn">Show Watches</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
