import {  Box, Button, Paper, Slider, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { audioData } from "../data/MeleodiData";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding: 8px 16px;
`;
const Component2 = styled(Box)`
  background-image: linear-gradient(
    1.8deg,
    rgba(0, 116, 117, 1) 50.2%,
    rgba(232, 232, 232, 1) 100%
  );
  height: 100vh;
  display:flex;
  justify-content:space-between;
  flex-direction:column;
`;
const Wrapper = styled(Box)`
  padding: 10px 30px;
  display: flex;
  flex-wrap: wrap;
`;
const Circle = styled(Box)`
  height: 16vh;
  width: 16vh;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
  box-shadow: 0px 0px 30px 10px orange inset;
  transition: width 2s, height 2s, transform 2s;
  cursor: pointer;
  transition: 1s;
  &:hover {
    transform: rotate(360deg);
  }
`;

function Melodies(props) {
  const [songsData, SetsongsData] = useState();
  useEffect(() => {
    SetsongsData(
      audioData.map((item) => {
        return {
          title: item.audiotitle,
          audio: new Audio(item.audio),
        };
      })
    );
  }, []);

  const audioHandle = (ele) => {
    console.log(ele);
    if (ele.audio.paused) {
      ele.audio.play();
    } else {
      if (ele.audio.play() !== undefined) {
        /* To AVOID
            the play() request was interrupted by a call to pause() */
        ele.audio
          .play()
          .then((_) => {
            //
            // Automatic playback started!
            // Show playing UI.
            // We can now safely pause audio...
            ele.audio.pause();
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log(error);
          });
      }
    }
  };

  return (
    <div>
      <Paper elevation={20}>
        <Component>
          <i class="fa-solid fa-arrow-left"></i>
          <Typography
            style={{ fontSize: 25, fontWeight: 600, color: "#00008B" }}
          >
            Melodies
          </Typography>
          <i class="fa-solid fa-stopwatch-20"></i>
        </Component>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "10px 16px",
          }}
        >
          <Button>All</Button>
          <Button>Nature</Button>
          <Button>Musical</Button>
          <Button>Category</Button>
        </Box>
      </Paper>
      <Component2>
        <Wrapper>
          {songsData &&
            songsData.map((item) => (
              <Circle
                onClick={() => {
                  audioHandle(item);
                }}
              >
                <Typography style={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
              </Circle>
            ))}
        </Wrapper>
        <Box style={{ width: "90%", margin: "auto" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                textAlign: "center",
                alignItems: "center",
                width: "100%",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              Mixer
            </Typography>
          </AccordionSummary>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <AccordionDetails
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Typography>Sound One</Typography>
              <Slider
                style={{ width: "90%" }}
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </AccordionDetails>
            <AccordionDetails
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Typography>Sound One</Typography>
              <Slider
                style={{ width: "90%" }}
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </AccordionDetails>
          </Box>
        </Accordion>
      </Box>
      </Component2>
    </div>
  );
}

export default Melodies;