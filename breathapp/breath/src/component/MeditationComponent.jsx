import React from "react";
import Nav from "./Nav";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { data } from "../data/Data";
import Option from "./Option";
import Footer from "./Footer";
import Meditation from "./Meditation";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding: 8px 16px;
`;
function MeditationComponent(props) {
  const navTo= useNavigate();
  return (
    <div>
      {/* <Nav/> */}
      <Paper elevation={20}>
        <Component>
          <i class="fa-solid fa-arrow-left" onClick={()=>navTo("/")}></i>
          <Typography
            style={{ fontSize: 25, fontWeight: 600, color: "#00008B" }}
          >
            Meditation
          </Typography>
          <i class="fa-solid fa-stopwatch-20"></i>
        </Component>
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button>All</Button>
          <Button>Nature</Button>
          <Button>Musical</Button>
          <Button>Category</Button>
        </Box>
      </Paper>
      <Meditation />
      <Option />
    </div>
  );
}

export default MeditationComponent;
