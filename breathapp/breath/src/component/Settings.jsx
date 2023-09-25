import React from "react";

import { Box, Typography, styled } from "@mui/material";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import Switch from "@mui/material/Switch";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DoNotDisturbAltOutlinedIcon from "@mui/icons-material/DoNotDisturbAltOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  display: flex;
  align-item: center;
`;
function Settings(props) {
  const navTo= useNavigate();

  return (
    <div>
      
      <Component style={{ marginLeft: 15, fontSize: 25, marginTop: 25 }}>
        <i onClick={()=>navTo("/")}
          class="fa-solid fa-arrow-left"
          style={{ color: "#00000099", textAlign: "center" }}
        ></i>
        <Typography
          style={{
            marginLeft: 10,
            fontSize: 20,
            color: "#00000099",
            fontWeight: 600,
          }}
        >
          Settings
        </Typography>
      </Component>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <i
            class="fa-solid fa-circle-user"
            style={{ fontSize: 25, borderRadius: "50%" }}
          ></i>
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Account
          </Typography>
        </Box>
        <i
          class="fa-solid fa-angle-right"
          style={{ color: "#00000099", marginRight: "20px" }}
        ></i>
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <SubscriptionsIcon style={{ fontSize: 25, borderRadius: "50%" }} />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Manage Subscription
          </Typography>
        </Box>
        <i
          class="fa-solid fa-angle-right"
          style={{ color: "#00000099", marginRight: "20px" }}
        ></i>
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <DateRangeOutlinedIcon
            style={{ fontSize: 25, borderRadius: "50%" }}
          />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Reminders
          </Typography>
        </Box>
        <i
          class="fa-solid fa-angle-right"
          style={{ color: "#00000099", marginRight: "20px" }}
        ></i>
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <DownloadForOfflineOutlinedIcon
            style={{ fontSize: 25, borderRadius: "50%" }}
          />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Download over cellular
          </Typography>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <DarkModeOutlinedIcon style={{ fontSize: 25, borderRadius: "50%" }} />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Enable dark mode
          </Typography>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <DoNotDisturbAltOutlinedIcon
            style={{ fontSize: 25, borderRadius: "50%" }}
          />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Do Not Disturb
          </Typography>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <CircleNotificationsOutlinedIcon
            style={{ fontSize: 25, borderRadius: "50%" }}
          />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Push Notification
          </Typography>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <InfoOutlinedIcon style={{ fontSize: 25, borderRadius: "50%" }} />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Support
          </Typography>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <SupportAgentOutlinedIcon
            style={{ fontSize: 25, borderRadius: "50%" }}
          />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            About
          </Typography>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <LockOpenOutlinedIcon style={{ fontSize: 25, borderRadius: "50%" }} />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Privcy Policy
          </Typography>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "15px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <GavelOutlinedIcon style={{ fontSize: 25, borderRadius: "50%" }} />
          <Typography
            style={{ fontSize: 16, color: "#000000DE", marginLeft: "20px" }}
          >
            Terms and Condition
          </Typography>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box style={{ display: "flex", justifyContent: "center",}}>
        version 1.0
      </Box>
      <Box>
        <Footer />
      </Box>
    </div>
  );
}

export default Settings;
