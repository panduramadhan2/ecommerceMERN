import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.post("/add-product", async (req, res) => {
  try {
    const { name, desc, category, price, capital, stock, weight } = req.body;
    const profit = price - capital;
    const product = await Product.create({
      name: name,
      desc: desc,
      category: category,
      price: price,
      capital: capital,
      profit: profit,
      stock: stock,
      weight: weight,
    });

    if (!product)
      return res.status(500).json({ error: "Produk gagal ditambahkan" });
    res.status(200).json({ message: "Produk berhasil ditambahkan", product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/show-products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const product = await Product.findOne({ name: req.params.name });

    if (!product) {
      return res.status(404).json({ error: "Barang tidak ditemukan" });
    }
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
