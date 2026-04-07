require("./config/initDb");
const express = require("express");
const productRouter = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");
const profileRouter = require("./routes/profileRoutes");
const cartRoutes = require("./routes/cartRoutes");
const app = express();

app.use(express.json());

app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/cart", cartRoutes);

module.exports = app;
