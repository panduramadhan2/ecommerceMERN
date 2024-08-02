import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SelectOptions from "./SelectOptions";

const Order = () => {
  return (
    <Box
      sx={{
        width: "80%",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "460px",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Atur Jumlah
      </Typography>
      <Box sx={{ display: "flex", gap: "15px", padding: "5px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            padding: "2px",
          }}
        >
          <IconButton>
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
            1
          </Box>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Total Stok: 30
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={18}>
          Subtotal
        </Typography>
        <Typography fontWeight="bold" fontSize={20}>
          Rp 3.000.000
        </Typography>
      </Box>
      <Typography fontWeight="bold">Alamat Pengiriman</Typography>
      <Box>
        <SelectOptions />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={18}>
          Ongkir
        </Typography>
        <Typography fontWeight="bold" fontSize={20}>
          Rp 3.000.000
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={20}>
          Total
        </Typography>
        <Typography>Rp 3.000.000</Typography>
      </Box>
      <Button variant="contained">Keranjang</Button>
      <Button variant="outlined">Beli</Button>
    </Box>
  );
};

export default Order;
