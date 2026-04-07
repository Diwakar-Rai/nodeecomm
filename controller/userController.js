const userModel = require("../models/userModel");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All Fields required" });
  }

  try {
    const existingUser = await userModel.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
    const result = await userModel.createUser(name, email, password);
    res.status(201).json({ message: "User created", userId: result.insertId });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.getUserByEmail(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "login successful", userId: user.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signup, login };
