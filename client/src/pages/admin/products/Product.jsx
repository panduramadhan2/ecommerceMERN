import { Box, Fade, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useEffect, useState } from "react";

const createMarkUp = (html) => {
  return { __html: html };
};

const Product = ({ open, close, productDetail }) => {
  const product = productDetail && productDetail;

  const [imageIndex, setIndex] = useState(0);

  const left = () => {
    setIndex((imageIndex - 1 + product?.image.length) % data?.image.length);
  };
  const right = () => {
    setIndex((imageIndex + 1) % product?.image.length);
  };

  const closeHandler = () => {
    close();
  };

  return (
    <Modal open={open} onClose={close}>
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, md: 700 },
            bgcolor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box sx={{ position: "absolute", top: -16, right: -16 }}>
            <IconButton onClick={closeHandler} sx={{ bgcolor: "red" }}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={product?.image[imageIndex].link}
                  alt={product?.name}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "350px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <IconButton onClick={left}>
                  <ArrowLeftIcon />
                </IconButton>
                <IconButton onClick={right}>
                  <ArrowRightIcon />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" component="div">
                {product?.name}
              </Typography>
              <Typography variant="h6" component="div">
                {product?.category}
              </Typography>
              <Typography variant="h6" component="div">
                Rp {parseFloat(product?.price).toLocaleString("id-ID")}
              </Typography>
              <Typography variant="h6" component="div">
                Rp {parseFloat(product?.capital).toLocaleString("id-ID")}
              </Typography>
              <Typography variant="h6" component="div">
                Rp {parseFloat(product?.profit).toLocaleString("id-ID")}
              </Typography>
              <Typography variant="h6" component="div">
                {product?.stock}
              </Typography>
              <Typography variant="h6" component="div">
                {product?.weight} gram
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ mt: 2 }}
            dangerouslySetInnerHTML={createMarkUp(product?.desc)}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default Product;
