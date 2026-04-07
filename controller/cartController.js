const cartModel = require("../models/cartModel");

const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  if (!userId || !productId) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await cartModel.addToCart(userId, productId, quantity || 1);
    return res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await cartModel.getCartByUser(userId);
    res.json({ message: "Cart fetched", data: cart });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const result = await cartModel.updateCartQuantity(id, quantity);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.json({ message: "Quantity updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeItem = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await cartModel.removeFromCart(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.json({ message: "Item removed from cart" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { addToCart, updateQuantity, removeItem, getCart };
