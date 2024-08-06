import { Fragment } from "react";
import Appbar from "../../components/appbar/Appbar";
import { Box, Button, TextField } from "@mui/material";

const Profile = () => {
  return (
    <Fragment>
      <Appbar />
      <Box
        sx={{
          // height: "calc(100vh - 70px)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ height: 620, width: 700, borderRadius: "10px", boxShadow: 4 }}
        >
          {/* background */}
          <Box
            sx={{
              height: "30%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://teropongmedia.id/wp-content/uploads/2023/02/debuter-ecommerce-2-1024x536-1.jpg"
              alt="background"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                height: 150,
                width: 150,
                top: 0,
                bottom: 0,
                margin: "auto",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid white",
              }}
            >
              avatar
            </Box>
          </Box>
          {/* detail */}
          <Box
            sx={{
              height: "65%",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <TextField fullWidth label="Nama Lengkap" sx={{ mb: 0.5 }} />
            <TextField fullWidth label="Email" sx={{ mb: 0.5 }} />
            <TextField fullWidth label="Hp" sx={{ mb: 0.5 }} />
            <TextField fullWidth label="Password Lama" sx={{ mb: 0.5 }} />
            <TextField fullWidth label="Password Baru" sx={{ mb: 0.5 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                width: "100%",
              }}
            >
              <Button variant="outlined" color="secondary">
                Update Password
              </Button>
              <Button variant="outlined" color="error">
                Update Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Profile;
