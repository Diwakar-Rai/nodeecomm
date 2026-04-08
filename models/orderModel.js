const db = require("../config/db");

const createOrder = async (userId, totalAmount) => {
  const [result] = await db.query(
    "INSERT INTO orders (user_id, total_amount) VALUES (?, ?)",
    [userId, totalAmount],
  );

  return result.insertId;
};

const addOrderItems = async (orderId, items) => {
  for (let item of items) {
    await db.query(
      "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES(?, ?, ?, ?)",
      [orderId, item.product_id, item.quantity, item.price],
    );
  }
};

const getCartItems = async (userId) => {
  const [rows] = await db.query(
    `SELECT c.product_id, c.quantity, p.price 
     FROM cart c
     JOIN products p ON c.product_id = p.id
     WHERE c.user_id = ?`,
    [userId],
  );
  return rows;
};

const clearCart = async (userId) => {
  await db.query("DELETE FROM cart WHERE user_id = ?", [userId]);
};

module.exports = {
  createOrder,
  addOrderItems,
  getCartItems,
  clearCart,
};
