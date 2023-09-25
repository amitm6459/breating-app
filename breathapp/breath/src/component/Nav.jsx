
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
// const settings = ["Profile", "Account", "Logout"];
import { Snackbar } from "@mui/material";

const Header = () => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Typo = styled(Typography)``;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box style={{ display: "flex" }}>
            <img
              src="https://breathlly.netlify.app/assets/welcome.jpeg"
              alt=""
              width={30}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              style={{ marginRight: "20px", borderRadius: "5px" }}
            />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,

                color: "inherit",
                textDecoration: "none",
              }}
            >
              Breathly
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              ></IconButton>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon
                    onClick={handleClick({
                      vertical: "bottom",
                      horizontal: "right",
                    })}
                    color="action"
                    style={{ fontSize: "30px", color: "white" }}
                  />
                  <Snackbar
                    open={open}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    sx={{
                      ".MuiSnackbarContent-root": {
                        backgroundColor: "rgb(170, 3, 170)",
                      },
                    }}
                    message="Meditation class is live! Click Here to Join!"
                  />
                </Badge>

                <Avatar
                  onClick={handleOpenUserMenu}
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  style={{ marginLeft: "20px" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to="/account">
                  <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))} */}
              <Box
                style={{
                  margin: " 5px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
                onClick={handleCloseUserMenu}
              >
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AccountCircleIcon
                      style={{
                        color: "blue",
                        marginRight: "10px",
                        marginBottom: "5px",
                        padding: "5px",
                        fontSize: "30px",
                        borderRadius: "50%",
                        boxShadow: " 2px 1px 3px 1px #888888",
                      }}
                    />
                    Profile
                  </Typography>
                </Link>
                <Link
                  to="/account"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AccountBalanceIcon
                      style={{
                        color: "blue",
                        marginRight: "10px",
                        marginBottom: "5px",
                        padding: "5px",
                        fontSize: "30px",
                        borderRadius: "50%",
                        boxShadow: " 2px 1px 3px 1px #888888",
                      }}
                    />
                    Account
                  </Typography>
                </Link>
                <Link
                  to="/firstpage"
                  style={{ textDecoration: "none", color: "black" }}
                >
                <Link to="/loginhome" style={{textDecoration:"none"}}>
                     <Typography  style={{    display: "flex",justifyContent: "center",alignItems: "center", }}>
                       <LogoutIcon style={{color: "blue",marginRight: "10px",marginBottom: "5px",padding: "5px",fontSize: "30px",borderRadius: "50%",boxShadow: " 2px 1px 3px 1px #888888",}}/>
                         Logout
                     </Typography>
                 </Link>
                </Link>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header