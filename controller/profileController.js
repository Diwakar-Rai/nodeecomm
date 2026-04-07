const userModel = require("../models/userModel");
const getProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const result = await userModel.updateUser(id, name, email);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userModel.deleteUser(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getProfile, updateProfile, deleteUser };
