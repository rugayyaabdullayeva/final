const Product = require("../model/product");

const AddProduct = async (req, res) => {
  try {
    const { img, title, price } = req.body;
    const product = new Product({
      img,
      title,
      price,
    });
    product.save();
    res.status(201).json({ message: "success", data: product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const GetProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const GetProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { img, title, price } = req.body;

    const user = await Product.findByIdAndUpdate(
      id,
      {
        img,
        title,
        price,
      },
      { new: true }
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  AddProduct,
  GetProduct,
  GetProductById,
  DeleteProduct,
  UpdateProduct,
};
