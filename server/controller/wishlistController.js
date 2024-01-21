const Wishlist = require("../model/wishlist");

const AddWishlist = async (req, res) => {
  try {
    const { img, title, price } = req.body;

    const wishlist = new Wishlist({
      img,
      title,
      price,
    });
    wishlist.save();
    res.status(201).json({ message: "success", data: wishlist });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const GetWishlist = async (req, res) => {
  try {
    const wishlists = await Wishlist.find({});
    res.status(200).json(wishlists);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const GetWishlistById = async (req, res) => {
  try {
    const { id } = req.params;
    const wishlist = await Wishlist.findById(id);

    if (!wishlist) {
      res.status(404).json({ message: "Wishlist not found" });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const DeleteWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    const wishlist = await Wishlist.findByIdAndDelete(id);

    if (!wishlist) {
      res.status(404).json({ message: "Wishlist not found" });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const UpdateWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    const { img, title, price } = req.body;

    const wishlist = await Wishlist.findByIdAndUpdate(
      id,
      {
        img,
        title,
        price,
      },
      { new: true }
    );

    if (!wishlist) {
      res.status(404).json({ message: "Wishlist not found" });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  AddWishlist,
  GetWishlist,
  GetWishlistById,
  DeleteWishlist,
  UpdateWishlist,
};
