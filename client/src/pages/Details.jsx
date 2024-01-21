import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";
import { Helmet } from "react-helmet";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = () => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((item) => setProduct(item));
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  console.log(product);
  return (
    <div id="detail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="detailed-product">
          <img src={product.img} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <button className="btn btn-danger">Order Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
