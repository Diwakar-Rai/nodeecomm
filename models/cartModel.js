const db = require("../config/db");

const addToCart = async (userId, productId, quantity) => {
  const sql = `INSERT INTO cart (user_id, product_id, quantity)
                 VALUES (?, ?, ?)`;
  const [result] = await db.query(sql, [userId, productId, quantity]);
  return result;
};

const getCartByUser = async (userId) => {
  const sql = `SELECT c.id, p.name, p.price, c.quantity
                 FROM cart c
                 JOIN products p ON c.product_id = p.id
                 WHERE c.user_id = ?`;
  const [rows] = await db.query(sql, [userId]);
  return rows;
};

const removeFromCart = async (id) => {
  const [result] = await db.query("DELETE FROM cart WHERE id = ?", [id]);
  return result;
};

module.exports = { addToCart, getCartByUser, removeFromCart };
