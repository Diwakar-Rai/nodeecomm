const db = require("../config/db");

const addProduct = async (name, price) => {
  const sql = "INSERT INTO products (name, price) VALUES(?, ?)";
  const [result] = await db.query(sql, [name, price]);
  return result;
};

const getAllProducts = async () => {
  const [rows] = await db.query("SELECT * FROM products");
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

const deleteProduct = async (id) => {
  const [result] = await db.query("DELETE FROM products WHERE id = ?", [id]);
  return result;
};

module.exports = { addProduct, getAllProducts, getProductById, deleteProduct };
