import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import passport from "passport";

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

//Login
router.post("/login", async (req, res) => {
  try {
    passport.authenticate("local", (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else if (!user) {
        return res.status(404).json({ error: "Username atau password salah" });
      } else {
        req.login(user, function (err) {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          const token = generateToken(user);
          res.status(200).json({ token });
        });
      }
    })(req, res);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
export default router;
