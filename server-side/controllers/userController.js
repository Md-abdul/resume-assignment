const UserModels = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await UserModels.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists!" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const newUser = new UserModels({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error!" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModels.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, 'hello', { expiresIn: '2h' });
    // res.json({ token });
    res.json({ token, name: user.name });
  } catch (error) {
    res.status(500).json({ msg: "Server error!" });
  }
};

module.exports = { registerUser, loginUser };
