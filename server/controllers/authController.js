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
        message: "Please login",
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


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please signup",
        data: null,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
        data: null,
      });
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
        );

        return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: { token, user },
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: error.message,
        data: null,
        });
    }
};


module.exports = {signup, login}




