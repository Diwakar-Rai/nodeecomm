const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .json({ message: "Product name and price are needed." });
  }

  try {
    const product = await productModel.addProduct(name, price);
    return res.status(201).json({ message: "success", data: product });
  } catch (error) {
    return res.status(500).json({ message: "failed", error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();

    return res
      .status(200)
      .json({ message: "Product fetch successful", data: products });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Product fetch failed", error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Failed" });
    }

    return res.status(200).json({ message: "success", data: product });
  } catch (error) {
    return res.status(500).json({ message: "Failed", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const result = await productModel.deleteProduct(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted sucessfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
};
