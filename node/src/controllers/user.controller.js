import { User } from "../models/user.models.js";


// ✅ CREATE
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log('req:11 ', req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
   console.error('User creation error:', error);
    res.status(501).json({ success: false, message: error.message });
  }
};


// ✅ READ ALL
export const getUsers = async (req, res) => {
  console.log("okokoko");
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ READ ONE
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ UPDATE
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ DELETE
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};