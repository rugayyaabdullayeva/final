import React, { useContext } from "react";
import * as Yup from "yup";
import "./Add.scss";
import { Helmet } from "react-helmet";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MainContext } from "../context/ContextProvider";
import toast, { Toaster } from "react-hot-toast";

const productSchema = Yup.object().shape({
  img: Yup.string().min(2, "Too Short!").required("Required"),
  price: Yup.string().max(50, "Too Long!").required("Required"),
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Add = () => {
  const { fetchProducts } = useContext(MainContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (values) => {
    await axios.post("http://localhost:8080/products", values);
    fetchProducts();
    toast.success("Product added successfully");
  };

  return (
    <div id="add">
      <Toaster position="top-center" reverseOrder={false} />

      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <h1>Add New Watch!</h1>

        <form id="addForm" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="img">Img:</label>
          <input
            name="img"
            className="form-control mb-2 "
            {...register("img")}
          />
          {errors?.img?.message ? (
            <p style={{ color: "red" }}>{errors?.img?.message}</p>
          ) : (
            ""
          )}

          <label htmlFor="title">Title:</label>
          <input
            name="title"
            {...register("title")}
            className="form-control mb-2"
          />
          {errors?.title?.message ? (
            <p style={{ color: "red" }}>{errors?.title?.message}</p>
          ) : (
            ""
          )}

          <label htmlFor="price">Price:</label>
          <input
            name="price"
            {...register("price")}
            className="form-control mb-2"
          />
          {errors?.price?.message ? (
            <p style={{ color: "red" }}>{errors?.price?.message}</p>
          ) : (
            ""
          )}

          <button className="btn btn-success mt-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Add;
