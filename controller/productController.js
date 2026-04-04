const productModel = require("../models/productModel");

const createProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .json({ message: "Product name and price are needed." });
  }

  productModel.addProduct(name, price, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "failed", error: err });
    }

    return res.status(201).json({
      message: "product added successfully",
      productId: result.insertId,
    });
  });
};

module.exports = { createProduct };
