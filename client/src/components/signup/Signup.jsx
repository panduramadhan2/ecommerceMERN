import { Box, Button, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 1000,
          height: 600,
          display: "flex",
          borderRadius: "5px",
          boxShadow: 4,
        }}
      >
        <Box sx={{ flex: 1, p: 4 }}>
          <img
            src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg"
            alt="daftar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            p: 4,
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Daftar
          </Typography>
          <Typography variant="body2">
            * Kami menjaga data anda, No Handphone digunakan untuk
            mengkonfirmasi pengiriman barang
          </Typography>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <TextField
              fullWidth
              placeholder="Nama"
              label="Nama"
              name="name"
              type="text"
              required
            />
            <TextField
              fullWidth
              placeholder="Email"
              label="Email"
              name="email"
              type="email"
              required
            />
            <TextField
              fullWidth
              placeholder="Password"
              label="Password"
              name="password"
              type="password"
              required
            />
            <TextField
              fullWidth
              placeholder="No HP"
              label="No HP"
              name="phone"
              type="number"
              required
            />
            <Button variant="contained" color="success">
              daftar
            </Button>
            <Typography align="center">Atau Login dengan </Typography>
            <Button
              variant="contained"
              color="error"
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
