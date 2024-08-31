import { Box, IconButton, Typography } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { orange } from "@mui/material/colors";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import Order from "./Order";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../state/api/productApi";

const createMarkUp = (html) => {
  return { __html: html };
};

const DetailProduct = () => {
  const params = useParams();

  const { data, errror, isLoading } = useGetProductQuery(params?.name);

  const [imageIndex, setIndex] = useState(0);

  const left = () => {
    setIndex((imageIndex - 1 + data?.image.length) % data?.image.length);
  };
  const right = () => {
    setIndex((imageIndex + 1) % data?.image.length);
  };

  return (
    <Box>
      <Appbar />
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        {/* <Box sx={{ display: "flex", flex: 2, alignItems: "start" }}> */}
        <Box sx={{ display: "flex", flex: 2, alignItems: "start", p: 3 }}>
          {/* Image */}
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
                src={data?.image[imageIndex].link}
                alt={data?.name}
                style={{
                  height: "450px",
                  width: "450px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "510px",
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
          {/* Detail */}
          <Box
            sx={{
              display: "flex",
              flex: 1,
              p: 2,
              gap: 1,
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {data?.name}
            </Typography>

            <Typography
              sx={{ display: "flex", alignItems: "center", color: "grey" }}
            >
              <StarRoundedIcon sx={{ color: orange[500] }} />
              {data?.rating} dari ({data?.reviews.length} reviewers)
            </Typography>
            <Typography sx={{ color: "gray" }}>{data?.weight} gram</Typography>

            <Typography fontWeight="bold" variant="h5">{`Rp ${parseFloat(
              data?.price
            ).toLocaleString("id-ID")}`}</Typography>
            <Typography dangerouslySetInnerHTML={createMarkUp(data?.desc)} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flex: 1, p: 2, justifyContent: "center" }}>
          <Order product={data} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default DetailProduct;
