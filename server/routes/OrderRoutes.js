import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const router = express.Router();

router.post("/create", authenticate(["user"]), async (req, res) => {
  try {
    await Order.create(req.body);

    res.status(200).json({ message: "Pesanan berhasil disimpan" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/create-from-cart", authenticate(["user"]), async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    console.log(cart);

    if (cart) {
      const productIds = req.body.products.map((product) => product.productId);
      cart.products = cart.products.filter(
        (cartProduct) => !productIds.includes(cartProduct.productId.toString())
      );
      await cart.save();
    }

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
      .populate({ path: "user", model: "user" })
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
