import { Box, Typography } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Confirm() {
  return (
    <Box>
      <Appbar />
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CheckCircleIcon color="primary" sx={{ fontSize: 130 }} />
        <Typography>Pesanan Berhasil disimpan</Typography>
      </Box>
    </Box>
  );
}

export default Confirm;
