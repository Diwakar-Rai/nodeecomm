const db = require("../config/db");

const addProduct = (name, price, callback) => {
  const sql = "INSERT INTO products (name, price) VALUES(?, ?)";
  db.query(sql, [name, price], callback);
};

module.exports = { addProduct };
