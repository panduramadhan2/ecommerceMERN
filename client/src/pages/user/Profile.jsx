import { Fragment, useEffect, useState } from "react";
import Appbar from "../../components/appbar/Appbar";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateProfile } from "../../state/api/authApi";
import iziToast from "izitoast";
import { profileReset } from "../../state/slice/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    user,
    isUpdateProfile,
    isUpdateProfileLoading,
    isUpdateProfileError,
    message,
    error,
  } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const profileHandler = () => {
    const data = {
      name,
      username,
      phone,
    };
    dispatch(updateProfile(data));
  };
  useEffect(() => {
    if (user) {
      setName(user?.name);
      setUsername(user?.username);
      setPhone(user?.phone);
    }
  }, [user]);

  useEffect(() => {
    if (isUpdateProfile) {
      iziToast.success({
        title: "Success",
        message: message,
        position: "topRight",
        timeout: 3000,
      });
      dispatch(loadUser());
      dispatch(profileReset());
    }
    if (isUpdateProfileError) {
      iziToast.error({
        title: "Error",
        message: error,
        position: "topRight",
        timeout: 3000,
      });
    }
  }, [isUpdateProfile, message, isUpdateProfileError, error]);
  return (
    <Fragment>
      <Appbar />
      <Box
        sx={{
          // height: "calc(100vh - 70px)",
          height: "100Vh",
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
            <TextField
              fullWidth
              label="Nama Lengkap"
              sx={{ mb: 0.5 }}
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              label="Email"
              sx={{ mb: 0.5 }}
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Hp"
              sx={{ mb: 0.5 }}
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
            />
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
              <Button variant="outlined" color="error" onClick={profileHandler}>
                {isUpdateProfileLoading ? "updating..." : "update profile"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Profile;
