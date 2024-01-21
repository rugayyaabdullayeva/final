const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    img: { type: String },
    title: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
