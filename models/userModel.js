const db = require("../config/db");

const createUser = async (name, email, password) => {
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  const [result] = await db.query(sql, [name, email, password]);
  return result;
};

const getUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

const getUserById = async (id) => {
  const [rows] = await db.query(
    "SELECT id, name, email FROM users WHERE id = ?",
    [id],
  );
  return rows[0];
};

const updateUser = async (id, name, email) => {
  const [result] = await db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, id],
  );
  return result;
};

const deleteUser = async (id) => {
  const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
  return result;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
};
