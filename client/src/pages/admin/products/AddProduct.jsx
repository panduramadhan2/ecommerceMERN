import { Fragment, useEffect, useState } from "react";
import AdminBar from "../components/appbar/AdminBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Button, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReactQuill from "react-quill";
import { useAddProductMutation } from "../../../state/api/productApi";
import iziToast from "izitoast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [addProduct, { data, isSuccess, isLoading, error, reset }] =
    useAddProductMutation();
  const [previewImg, setPreviewImg] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [capital, setCapital] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [weight, setWeight] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState(null);

  const ImgHandler = () => {
    document.getElementById("pickImg").click();
  };

  const uploadImg = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImg((prevImg) => [
      ...prevImg,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
    setImages(files);
  };

  const dropImg = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setPreviewImg((prevImg) => [
      ...prevImg,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
    setImages(files);
  };

  const dragImg = (e) => {
    e.preventDefault();
  };

  const removeImg = (index) => {
    setPreviewImg((prevImg) => {
      const updateImg = [...prevImg];
      updateImg.splice(index, 1);

      return updateImg;
    });
  };

  const createHandler = () => {
    const product = new FormData();
    product.append("name", name);
    product.append("category", category);
    product.append("price", price);
    product.append("capital", capital);
    product.append("stock", stock);
    product.append("weight", weight);
    product.append("desc", desc);

    if (images) {
      images.forEach((file) => {
        product.append("image", file);
      });
    }

    addProduct(product);
  };

  useEffect(() => {
    if (isSuccess) {
      iziToast.success({
        title: "Success",
        message: data?.message,
        position: "topRight",
        timeout: 3000,
      });

      reset();

      navigate("/admin-produk");
    }

    if (error) {
      iziToast.error({
        title: "Error",
        message: error?.data.message,
        position: "topRight",
        timeout: 3000,
      });

      reset();
    }
  }, [isSuccess, data, error]);

  return (
    <Fragment>
      <AdminBar />
      <Grid2
        container
        sx={{ position: "relative", top: 70, minHeight: "80vh" }}
      >
        <Grid2
          item
          md={6}
          sx={{ p: 4, display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            label="Nama Produk"
            placeholder="Nama Produk"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Kategori"
            placeholder="Kategori"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            label="Harga Jual"
            placeholder="Harga Jual"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Harga Beli"
            placeholder="Harga Beli"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
          />
          <TextField
            label="Stok"
            placeholder="Stok"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <TextField
            label="Berat"
            placeholder="Berat (gram)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
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
            onDrop={dropImg}
            onDragOver={dragImg}
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
              style={{ width: "100%", height: "90%" }}
            />
          </Box>
        </Grid2>
        <Box
          sx={{ display: "flex", justifyContent: "end", width: "100%", mt: 0 }}
        >
          <Button
            sx={{ mr: 8 }}
            variant="contained"
            color="primary"
            onClick={createHandler}
          >
            {isLoading ? "..." : "Simpan..."}
          </Button>
        </Box>
      </Grid2>
    </Fragment>
  );
};

export default AddProduct;
