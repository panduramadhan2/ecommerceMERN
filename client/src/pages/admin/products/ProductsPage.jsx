import { Box, IconButton, Input, Tooltip } from "@mui/material";
import AdminBar from "../components/appbar/AdminBar";
import AddIcon from "@mui/icons-material/Add";
import { blue, orange, red } from "@mui/material/colors";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import Products from "./Products";

const ProductsPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />
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
      <Box sx={{ p: 2 }}>
        <Products />
      </Box>
    </Box>
  );
};

export default ProductsPage;
