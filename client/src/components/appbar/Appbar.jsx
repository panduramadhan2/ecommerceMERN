import { Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  const user = "";

  const userMenu = [
    { menu: "Profile", link: "/profile" },
    { menu: "Order", link: "/order" },
  ];
  const adminMenu = [
    { menu: "Setting", link: "/admin-setting" },
    { menu: "Dashboard", link: "/admin-dashboard" },
  ];

  const [open, setOpen] = useState(null);

  const menuOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const menuClose = (event) => {
    setOpen(null);
  };
  const toCart = () => navigate("/cart");
  const toHome = () => navigate("/");
  const toLoginPage = () => navigate("/login");
  const toPage = (link) => {
    navigate(link);
    menuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ cursor: "pointer" }} onClick={toHome}>
            <img
              src="logo2.png"
              alt="logo"
              style={{ height: "50px", width: "120px", objectFit: "contain" }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton color="inherit" onClick={toCart}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            {user === "user" ? (
              <>
                <IconButton color="inherit" onClick={menuOpen}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(open)}
                  onClose={menuClose}
                >
                  {userMenu.map((item, index) => (
                    <MenuItem key={index} onClick={() => toPage(item.link)}>
                      {item.menu}
                    </MenuItem>
                  ))}
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </>
            ) : user === "admin" ? (
              <>
                <IconButton color="inherit" onClick={menuOpen}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(open)}
                  onClose={menuClose}
                >
                  {adminMenu.map((item, index) => (
                    <MenuItem key={index} onClick={() => toPage(item.link)}>
                      {item.menu}
                    </MenuItem>
                  ))}
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <IconButton color="inherit" onClick={toLoginPage}>
                <LoginIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
