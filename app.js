require("./config/initDb");
const express = require("express");
const db = require("./config/db");
const app = express();

db.query("SELECT * FROM products", (err, result) => {
  if (err) {
    console.log("something went wrong");
  } else {
    console.log(result);
  }
});

module.exports = app;
