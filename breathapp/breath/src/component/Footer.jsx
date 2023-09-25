import { BottomNavigation, Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div style={{ padding: "10px 16px" }}>
      <BottomNavigation
        style={{
          justifyContent: "space-around",
          display: "flex",
          textAlign: "center",
        }}
        sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <Button style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-house-chimney" style={{ fontSize: 25 }}></i>
            <Typography style={{ fontSize: 10, color: "grey", marginTop: 5 }}>
              Home
            </Typography>
          </Link>
        </Button>
        <Button style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/sleep" style={{ textDecoration: "none" }}>
            <i
              class="fa-regular fa-moon"
              style={{ fontSize: 25, textAlign: "center" }}
            ></i>
            <Typography
              style={{
                fontSize: 10,
                color: "grey",
                marginTop: 5,
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Sleep
            </Typography>
          </Link>
        </Button>
        <Button style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/meditation" style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-spa" style={{ fontSize: 25 }}></i>
            <Typography style={{ fontSize: 10, color: "grey", marginTop: 5 }}>
              Meditation
            </Typography>
          </Link>
        </Button>
        <Button style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/relax" style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-music" style={{ fontSize: 25 }}></i>
            <Typography style={{ fontSize: 10, color: "grey", marginTop: 5,marginBottom:5 }}>
              Relax
            </Typography>
          </Link>
        </Button>
        <Button style={{ display: "flex", flexDirection: "column" }}>
         <Link to='/settings' style={{ textDecoration: "none" }}>
          <i class="fa-solid fa-gear" style={{ fontSize: 25 }}></i>
          <Typography style={{ fontSize: 10, color: "grey", marginTop: 5 }}>
            Setting
          </Typography>
          </Link>
        </Button>
      </BottomNavigation>
    </div>
  );
}

export default Footer;
