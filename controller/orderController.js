const orderModel = require("../models/orderModel");

const checkout = async (req, res) => {
  const { userId } = req.body;
  try {
    const items = await orderModel.getCartItems(userId);
    if (items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" })
    }

    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    const orderId = await orderModel.createOrder(userId, total);
    await orderModel.addOrderItems(orderId, items);
    await orderModel.clearCart(userId);
    res.status(200).json({
      message: "Order places successfully",
      orderId,
      total,
    });
  } catch (error) {
    res.status(500).json({ message: "Checkout failed", error: error.message });
  }
};

module.exports = { checkout };
