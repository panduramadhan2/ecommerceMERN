import { Box, IconButton, Typography } from "@mui/material";
import Appbar from "../../../components/appbar/Appbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Order from "./Order";
import {
  useDeleteProductMutation,
  useMyCartQuery,
} from "../../../state/api/cartApi";
import { useEffect, useState } from "react";
import iziToast from "izitoast";

const Cart = () => {
  const { data } = useMyCartQuery();
  const [deleteProduct, { data: message, isSuccess, isLoading, error }] =
    useDeleteProductMutation();
  const products = data?.products;

  const [qty, setQty] = useState({});
  const [price, setPrice] = useState({});

  const updatePrice = (productId, newQty) => {
    setPrice((prevPrice) => ({
      ...prevPrice,
      [productId]:
        products.find((p) => p.productId._id === productId).productId.price *
        newQty,
    }));
  };

  const increase = (productId) => {
    // console.log(productId);

    setQty((prevQty) => {
      const newQty = { ...prevQty };

      if (
        newQty[productId] <
        products.find((p) => p.productId._id === productId).productId.stock
      ) {
        newQty[productId] += 1;
        updatePrice(productId, newQty[productId]);
      }
      return newQty;
    });
  };
  const decrese = (productId) => {
    // console.log(productId);

    setQty((prevQty) => {
      const newQty = { ...prevQty };

      if (newQty[productId] > 1) {
        newQty[productId] -= 1;
        updatePrice(productId, newQty[productId]);
      }
      return newQty;
    });
  };

  const deleteHandler = (productId) => deleteProduct(productId);

  useEffect(() => {
    const initialQty = {};
    const initialPrice = {};

    products?.forEach((product) => {
      initialQty[product.productId._id] = product.qty;
      initialPrice[product.productId._id] =
        product.productId.price * product.qty;
    });
    setQty(initialQty);
    setPrice(initialPrice);
  }, [products]);

  useEffect(() => {
    if (isSuccess) {
      iziToast.success({
        title: "Success",
        message: message?.message,
        position: "topRight",
        timeout: 3000,
      });
    }
    if (error) {
      iziToast.error({
        title: "Error",
        message: error?.data.error,
        position: "topRight",
        timeout: 3000,
      });
    }
  }, [isSuccess, message, error]);

  return (
    <>
      <Appbar />
      <Box sx={{ margin: "30px" }}>
        <Typography variant="h6" fontWeight="bold">
          Keranjang Belanja
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", flex: 2 }}>
            {products?.map((product, index) => (
              <Box key={index} sx={{ display: "flex", width: "100%" }}>
                <Box
                  sx={{
                    flex: 2,
                    display: "flex",
                    padding: "20px",
                    alignItems: "start",
                    gap: "20px",
                  }}
                >
                  <img
                    src={product?.productId.image[0].link}
                    alt="img"
                    style={{
                      height: "120px",
                      width: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      width: "80%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography fontWeight="bold">
                      {product?.productId.name}
                    </Typography>
                    <Typography fontWeight="bold">{`Rp ${parseFloat(
                      price[product?.productId._id]
                    ).toLocaleString("id-ID")}`}</Typography>
                    <Typography fontSize={14} fontStyle="italic">
                      {product.weight}gram
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "15px",
                        padding: "5px",
                        justifyContent: "end",
                      }}
                    >
                      <IconButton
                        onClick={() => deleteHandler(product?.productId._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "15px",
                          padding: "2px",
                        }}
                      >
                        <IconButton
                          onClick={() => decrese(product?.productId._id)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Box
                          sx={{
                            width: 50,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {qty[product?.productId._id]}
                        </Box>
                        <IconButton
                          onClick={() => increase(product?.productId._id)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Order />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
