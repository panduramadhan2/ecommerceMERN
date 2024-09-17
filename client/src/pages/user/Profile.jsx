import { Fragment, useEffect, useState } from "react";
import Appbar from "../../components/appbar/Appbar";
import { Avatar, Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUser,
  logoutUser,
  updatePassword,
  updateProfile,
  uploadAvatar,
} from "../../state/api/authApi";
import iziToast from "izitoast";
import {
  avatarReset,
  passwordReset,
  profileReset,
} from "../../state/slice/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    user,
    isUpdateProfile,
    isUpdateProfileLoading,
    isUpdateProfileError,
    isUpdatePassword,
    isUpdatePasswordLoading,
    isUpdatePasswordError,
    isUploadAvatar,
    isUploadAvatarLoading,
    isUploadAvatarError,
    message,
    error,
  } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const profileHandler = () => {
    const data = {
      name,
      username,
      phone,
    };
    dispatch(updateProfile(data));
  };

  const passwordHandler = () => {
    const data = {
      username,
      oldPassword,
      newPassword,
    };
    dispatch(updatePassword(data));
  };

  const avatarHandler = () => {
    document.getElementById("avatarInput").click();
  };

  const avatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadAvatar(file));
    }
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

  useEffect(() => {
    if (isUpdatePassword) {
      iziToast.success({
        title: "Success",
        message: message,
        position: "topRight",
        timeout: 3000,
      });
      dispatch(logoutUser());
      dispatch(passwordReset());
    }
    if (isUpdatePasswordError) {
      iziToast.error({
        title: "Error",
        message: error,
        position: "topRight",
        timeout: 3000,
      });
    }
  }, [isUpdatePassword, message, isUpdatePasswordError, error]);

  useEffect(() => {
    if (isUploadAvatar) {
      iziToast.success({
        title: "Success",
        message: message,
        position: "topRight",
        timeout: 3000,
      });
      dispatch(loadUser());
      dispatch(avatarReset());
    }
    if (isUploadAvatarError) {
      iziToast.error({
        title: "Error",
        message: error,
        position: "topRight",
        timeout: 3000,
      });
    }
  }, [isUploadAvatar, message, isUploadAvatarError, error]);

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
            <Avatar
              alt={user?.name}
              src={user?.avatar}
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
                cursor: "pointer",
              }}
              onClick={avatarHandler}
            />
            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={avatar}
            />
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
            <TextField
              fullWidth
              type="password"
              label="Password Lama"
              sx={{ mb: 0.5 }}
              value={oldPassword || ""}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <TextField
              fullWidth
              type="password"
              label="Password Baru"
              sx={{ mb: 0.5 }}
              value={newPassword || ""}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                width: "100%",
              }}
            >
              <Button
                variant="outlined"
                color="secondary"
                onClick={passwordHandler}
              >
                {isUpdatePasswordLoading ? "updating..." : "update password"}
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
