import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/create", authenticate(["user"]), async (req, res) => {
  try {
    await Order.create(req.body);
    res.status(200).json({ message: "Pesanan berhasil disimpan" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/my-order", authenticate(["user"]), async (req, res) => {
  try {
    const order = await Order.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .populate({
        path: "products",
        populate: { path: "productId", model: "product" },
      });
    if (!order) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }
    res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/get-orders", authenticate(["admin"]), async (req, res) => {
  try {
    const order = await Order.find()
      .populate({ path: "user" })
      .sort({ createdAt: -1 });
    if (!order) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }
    res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
