const mongoose = require("mongoose");

const { Schema } = mongoose;

const wishlistSchema = new Schema(
  {
    img: { type: String, require: true },
    title: { type: String, require: true },
    price: { type: Number },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
