import express from "express";
import User from "../models/User.js";

const router = express.Router();

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
          res.status(200).json({ success: true, user });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error });
  }
});

export default router;
