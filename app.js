require("./config/initDb");
const express = require("express");
const productRouter = require("./routes/productRoutes");
const app = express();

app.use(express.json());

app.use("/products", productRouter);

module.exports = app;
