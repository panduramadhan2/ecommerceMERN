import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

function generateToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES,
  });
}

// Register
router.post("/register", async (req, res) => {
  try {
    User.register(
      {
        name: req.body.name,
        username: req.body.username,
        phone: req.body.phone,
      },
      req.body.password,
      (err, user) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        } else {
          const token = generateToken(user);
          res.status(200).cookie("token", token).json({ token });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

export default router;
