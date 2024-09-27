import { Fragment, useState } from "react";
import AdminBar from "../components/appbar/AdminBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Button, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReactQuill from "react-quill";

const AddProduct = () => {
  const [previewImg, setPreviewImg] = useState([]);
  const [desc, setDesc] = useState("");
  const ImgHandler = () => {
    document.getElementById("pickImg").click();
  };

  const uploadImg = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImg((prevImg) => [
      ...prevImg,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const removeImg = (index) => {
    setPreviewImg((prevImg) => {
      const updateImg = [...prevImg];
      updateImg.splice(index, 1);

      return updateImg;
    });
  };
  return (
    <Fragment>
      <AdminBar />
      <Grid2 container sx={{ position: "relative", top: 60 }}>
        <Grid2
          item
          md={6}
          sx={{ p: 4, display: "flex", flexDirection: "column", gap: 4 }}
        >
          <TextField label="Nama Produk" placeholder="Nama Produk" />
          <TextField label="Kategori" placeholder="Kategori" />
          <TextField label="Harga Jual" placeholder="Harga Jual" />
          <TextField label="Harga Beli" placeholder="Harga Beli" />
          <TextField label="Stok" placeholder="Stok" />
          <TextField label="Berat" placeholder="Berat (gram)" />
        </Grid2>
        <Grid2
          item
          md={6}
          sx={{ p: 4, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box
            sx={{
              p: 2,
              height: 300,
              border: "2px dashed #ccc",
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {previewImg < 1 ? (
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  onClick={ImgHandler}
                >
                  <CloudUploadIcon sx={{ fontSize: 80, color: "#ccc" }} />
                  <Typography>Drag & Drop</Typography>
                </Box>
              ) : (
                previewImg?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Preview ${index}`}
                    loading="lazy"
                    style={{ height: 140, width: 140, objectFit: "cover" }}
                    onClick={() => removeImg(index)}
                  />
                ))
              )}
            </Box>
            <input
              type="file"
              multiple
              id="pickImg"
              accept="image/*"
              style={{ display: "none" }}
              onChange={uploadImg}
            />
          </Box>
          <Box sx={{ height: 100 }}>
            <ReactQuill
              //   ref={quillRef} // Assign the ref here
              theme="snow"
              value={desc}
              onChange={setDesc}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid2>
        <Box
          sx={{ display: "flex", justifyContent: "end", width: "100%", mt: 0 }}
        >
          <Button sx={{ mr: 8 }} variant="contained" color="primary">
            Simpan
          </Button>
        </Box>
      </Grid2>
    </Fragment>
  );
};

export default AddProduct;
