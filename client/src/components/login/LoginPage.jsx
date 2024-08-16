import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toSignUp = () => navigate("/daftar");

  const handleLogin = () => {
    alert(`${email} dan ${password}`);
  };
  return (
    <Box
      sx={{
        height: "100Vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 1000,
          height: 600,
          borderRadius: "5px",
          boxShadow: 4,
          p: 1,
          display: "flex",
        }}
      >
        {/* image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/638/554/small_2x/illustration-isometric-concept-putting-shopping-items-in-online-cart-free-vector.jpg"
            alt="login"
            style={{ objectFit: "cover" }}
          />
        </Box>
        {/* form */}
        <Box
          sx={{
            flex: 1,
            p: 4,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Login
          </Typography>
          <Typography>
            Belum punya akun?
            <span onClick={toSignUp} style={{ cursor: "pointer" }}>
              Daftar
            </span>
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "10px",
            }}
            onSubmit={handleLogin}
          >
            <TextField
              placeholder="Email"
              label="Email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              placeholder="Password"
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button variant="contained" color="success" type="submit">
              login
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

export default LoginPage;
