const db = require("../config/db");

const addToCart = async (userId, productId, quantity) => {
  const [existing] = await db.query(
    "SELECT * FROM cart WHERE user_id = ? AND product_id = ?",
    [userId, productId],
  );
  if (existing.length > 0) {
    const [result] = await db.query(
      "UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?",
      [quantity, userId, productId],
    );
    return result;
  } else {
    const [result] = await db.query(
      "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
      [userId, productId, quantity],
    );
    return result;
  }
};

const getCartByUser = async (userId) => {
  const sql = `SELECT c.id, p.name, p.price, c.quantity
                 FROM cart c
                 JOIN products p ON c.product_id = p.id
                 WHERE c.user_id = ?`;
  const [rows] = await db.query(sql, [userId]);
  return rows;
};

const updateCartQuantity = async (id, quantity) => {
  const [result] = await db.query("UPDATE cart SET quantity = ? WHERE id = ?", [
    quantity,
    id,
  ]);
  return result;
};

const removeFromCart = async (id) => {
  const [result] = await db.query("DELETE FROM cart WHERE id = ?", [id]);
  return result;
};

module.exports = {
  addToCart,
  getCartByUser,
  removeFromCart,
  updateCartQuantity,
};
