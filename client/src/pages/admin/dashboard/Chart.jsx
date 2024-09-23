import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

const Chart = ({ orders }) => {
  const productSales = {};
  const categorySales = {};

  orders.forEach((order) => {
    order.products.forEach((product) => {
      const productName = product.productId.name;
      const category = product.productId.category;
      const quantity = product.qty;

      if (!productSales[productName]) {
        productSales[productName] = 0;
      }
      productSales[productName] += quantity;
      // console.log(productSales);

      if (!categorySales[category]) {
        categorySales[category] = 0;
      }
      categorySales[category] += quantity;
      // console.log(category);
    });
  });

  const topProduct = Object.entries(productSales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, sales]) => ({ name, sales }));

  const topCategory = Object.entries(categorySales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, sales]) => ({ name, sales }));

  const dataProduct = topProduct;
  const dataCategory = topCategory;
  console.log(dataProduct);
  console.log(dataCategory);

  return (
    <Grid container>
      <Grid item md={12}>
        top product
      </Grid>
      <Grid item md={12}>
        top kategori
      </Grid>
    </Grid>
  );
};

export default Chart;
