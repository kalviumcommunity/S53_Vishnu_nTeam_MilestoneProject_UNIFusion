const User = require("../Models/Usermodal.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userRegistration = async (req, res) => {
  const userData = req.body;
  try {
    const isUserPresent = await User.findOne({ email: userData.email });

    if (isUserPresent) {
      return res.status(409).json({ message: "User already exists" }); // 409 Conflict
    }

    const newUser = new User(userData);
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const userLogin = async (req, res) => {
    const userData = req.body;
    try {
      const user = await User.findOne({
        email: userData.email,
        password: userData.password, 
      });
  
      if (!user) {
        return res
          .status(400)
          .json({ message: "Please do login with correct credentials" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
  
      return res
        .status(200)
        .json({ message: "Login success", user, token });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

module.exports = { userRegistration, userLogin };
