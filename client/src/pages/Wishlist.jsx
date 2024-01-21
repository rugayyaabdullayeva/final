import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get("http://localhost:8080/wishlist");
      setWishlist(response?.data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };
  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/wishlist/${id}`);
    fetchWishlist();
    toast.success("Product removes from Iwshlist successfully");
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Toaster position="top-center" reverseOrder={false} />

      <div
        className="card text-center"
        style={{
          paddingTop: 200,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
        }}
      >
        {wishlist.map((item) => (
          <div key={item._id} style={{ width: "30% !important" }}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(item?._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
