import { Box, IconButton, Input, Tooltip } from "@mui/material";
import AdminBar from "../components/appbar/AdminBar";
import AddIcon from "@mui/icons-material/Add";
import { blue, orange, red } from "@mui/material/colors";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import Products from "./Products";
import { useGetProductsQuery } from "../../../state/api/productApi";
import { Fragment } from "react";

const ProductsPage = () => {
  const { data: products } = useGetProductsQuery();
  // console.log(products);

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
              <IconButton>
                <AddIcon sx={{ color: blue[500] }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Upload">
              <IconButton>
                <UploadFileIcon sx={{ color: orange[500] }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Hapus Data">
              <IconButton>
                <FolderDeleteIcon sx={{ color: red[800] }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

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
