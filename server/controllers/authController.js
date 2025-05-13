const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
        data: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    // Optional JWT token creation (uncomment if needed)
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "30d",
    // });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

module.exports = signup;
