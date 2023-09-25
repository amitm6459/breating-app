import { Padding } from "@mui/icons-material";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import React from "react";

const Footer = styled(Box)`
  background: #002244;
  padding:30px 70px;
  margin: 5px 32px  5px 16px;
`;
const Col1 = styled(Typography)`
  color: white;
  font-weight: 500;
  font-size: 20px;
  & > p {
    padding:8px;

  } 
`
function Option(props) {
  return (
    <Footer>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Col1>
          <Typography style={{fontWeight:700}}>Daily Meditation</Typography>
          <Divider style={{ background: "blue", width:300,marginLeft:8}} />
          <Typography>Sleep</Typography>
          <Typography>Relax</Typography>
          <Typography>calm</Typography>
          <Typography>Mental Health</Typography>
        </Col1>
        <Col1>
          <Typography style={{fontWeight:700}}>Sleep Meditation</Typography>
          <Divider style={{ background: "blue", width:300,marginLeft:8}} />
          <Typography>Peaceful Sleep</Typography>
          <Typography>Gratitude sleep</Typography>
          <Typography>Night Gratitude</Typography>
          <Typography>Deep Sleep</Typography>
        </Col1>
        <Col1>
          <Typography style={{fontWeight:700}}>Relax Meditation</Typography>
          <Divider style={{ background: "blue", width:300,marginLeft:8}}/>
          <Typography>Sleep Realaxation</Typography>
          <Typography>Mental Relax</Typography>
          <Typography>Nature Relax</Typography>
          <Typography>Sky Walk</Typography>
        </Col1>
        <Col1>
          <Typography style={{fontWeight:700}}>Calm Meditation</Typography>
          <Divider style={{ background: "blue", width:300,marginLeft:8}}/>
          <Typography>Mental Health</Typography>
          <Typography>Mind Therapy</Typography>
          <Typography>Heaven</Typography>
          <Typography>Mental Relax</Typography>
        </Col1>
      </Box>
      <Divider style={{ background:"blue",marginTop:15}}/>
      <Box style={{marginTop:15,}}>
        <Typography style={{color:"white",textAlign:"center"}}>@2023 Breathings. All Rights Reversed!</Typography>
        <Typography style={{color:"white" ,margin:"15px 0px 20px 0px",textAlign:"center" }}>
          Privcy Policy  Cookie Policy
        </Typography>
      </Box>
    </Footer>
  );
}

export default Option;
