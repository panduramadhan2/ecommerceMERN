import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blue, orange, red, yellow } from "@mui/material/colors";
import ChatIcon from "@mui/icons-material/Chat";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../../state/api/productApi";
import { useEffect, useState } from "react";
import iziToast from "izitoast";
import CircularProgress from "@mui/material/CircularProgress";
import Product from "./Product";

const Products = ({ product }) => {
  const defaultImg = "http://dummyimage.com/650x650.png/cc0000/ffffff";

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const [deleteProduct, { data, isSuccess, error, isLoading, reset }] =
    useDeleteProductMutation();

  const {
    data: productDetail,
    isLoading: prodLoading,
    isSuccess: prodSuccess,
  } = useGetProductQuery(name, {
    skip: !name,
  });

  const deleteHandler = (id) => deleteProduct(id);

  const detailHandler = (name) => setName(name);

  useEffect(() => {
    if (prodSuccess) {
      setOpen(true);
    }
  }, [prodSuccess]);

  useEffect(() => {
    if (isSuccess) {
      iziToast.success({
        title: "Success",
        message: data?.message,
        position: "topRight",
        timeout: 3000,
      });
      reset();
    }
    if (error) {
      iziToast.error({
        title: "Success",
        message: error?.data.message,
        position: "topRight",
        timeout: 3000,
      });
      reset();
    }
  }, [isSuccess, error, data]);
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        height={224}
        image={
          product.image && product.image[0] ? product.image[0].link : defaultImg
        }
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography fontWeight="bold" align="center" fontSize={18}>
            {product.name.substring(0, 20) + " ..."}
          </Typography>
          <Typography
            fontWeight="bold"
            align="center"
            fontSize={14}
            fontStyle="italic"
          >
            Rp {parseFloat(product.price).toLocaleString("id-ID")}
          </Typography>
          <Stack spacing={2}>
            <Rating value={product.rating} readOnly />
          </Stack>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton onClick={() => detailHandler(product.name)}>
            {prodLoading ? (
              <CircularProgress size={20} />
            ) : (
              <MoreVertIcon sx={{ color: blue[500] }} />
            )}
          </IconButton>
          <IconButton>
            <ChatIcon sx={{ color: orange[500] }} />
          </IconButton>
          <IconButton>
            <EditIcon sx={{ color: yellow[500] }} />
          </IconButton>
          <IconButton onClick={() => deleteHandler(product._id)}>
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <RemoveIcon sx={{ color: red[500] }} />
            )}
          </IconButton>
        </Box>
      </CardActions>
      <Product
        open={open}
        close={() => setOpen(false)}
        productDetail={productDetail}
      />
    </Card>
  );
};

export default Products;
