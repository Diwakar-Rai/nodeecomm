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

module.exports = { createUser, getUserByEmail };
