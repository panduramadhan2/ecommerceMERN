import {
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
  Input,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import AdminBar from "../components/appbar/AdminBar";
import AddIcon from "@mui/icons-material/Add";
import { blue, orange, red } from "@mui/material/colors";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import Products from "./Products";
import {
  useDeleteProductsMutation,
  useGetProductsQuery,
} from "../../../state/api/productApi";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadProducts from "./UploadProducts";
import iziToast from "izitoast";

const ProductsPage = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(false);

  const { data: products } = useGetProductsQuery();

  const toPage = () => navigate("/admin-produk/tambah");

  const [deleteProducts, { data, isSuccess, isLoading, error, reset }] =
    useDeleteProductsMutation();

  const delAll = () => deleteProducts();

  useEffect(() => {
    if (isSuccess) {
      iziToast.success({
        title: "Success",
        message: data?.message,
        position: "topRight",
        timeout: 3000,
      });
      reset();
      setValid(false);
    }
    if (error) {
      iziToast.error({
        title: "Success",
        message: error?.data.message,
        position: "topRight",
        timeout: 3000,
      });
      reset();
      console.log(error);
    }
  }, [isSuccess, data, error]);

  return (
    <Fragment>
      <AdminBar />
      <Box sx={{ position: "relative", top: 70 }}>
        {/* search function */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Input placeholder="Cari Produk" sx={{ p: 1 }} />
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Tambah">
              <IconButton onClick={toPage}>
                <AddIcon sx={{ color: blue[500] }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Upload" onClick={() => setOpen(true)}>
              <IconButton>
                <UploadFileIcon sx={{ color: orange[500] }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Hapus Data">
              <IconButton onClick={() => setValid(true)}>
                <FolderDeleteIcon sx={{ color: red[800] }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Modal open={valid} onClose={() => setValid(false)}>
          <Fade in={valid}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 400,
                bgcolor: "white",
                transform: "translate(-50%, -50%)",
                boxShadow: 24,
                p: 2,
                borderRadius: "5px",
              }}
            >
              <Typography>
                Apakah anda yakin akan menghapus seluruh produk
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 2 }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setValid(false)}
                >
                  Batalkan
                </Button>
                <Button variant="outlined" color="error" onClick={delAll}>
                  {isLoading ? <CircularProgress sx={20} /> : "Lanjutkan"}
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>

        <UploadProducts open={open} close={() => setOpen(false)} />
        {/* produk */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            // gap: 3,
            justifyContent: "center",
          }}
        >
          {products?.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </Box>
      </Box>
    </Fragment>
  );
};

export default ProductsPage;
