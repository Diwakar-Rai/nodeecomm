require("./config/initDb");
const express = require("express");
const productRouter = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");
const app = express();

app.use(express.json());

app.use("/products", productRouter);
app.use("/auth", authRouter);

module.exports = app;
