import React from 'react';
import Nav from './Nav';
import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, styled,Typography } from '@mui/material';
import { data } from '../data/Data';
import Option from './Option';
import Footer from './Footer';
import Meditation from './Meditation';
import { Link, useNavigate } from 'react-router-dom';

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding:8px 16px;
`;

function Relax(props) {
  const navTo= useNavigate();

    return (
        <div>
       <Paper elevation={20}>
        <Component>
          <i class="fa-solid fa-arrow-left" onClick={()=>navTo("/")}></i>
          <Typography style={{ fontSize: 25, fontWeight: 600, color: "#00008B" }}>Relax</Typography>
          <i class="fa-solid fa-stopwatch-20"></i>
        </Component>
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button>All</Button>
          <Button>Favorite</Button>
          <Button>Bigginers</Button>
          <Button>self-Calm</Button>
        </Box>   
      </Paper>
      <Box style={{textAling:"center",justifyContent:"center",display:"flex",margin:"40px 0px 20px 0px"}}>
      <Link to="/melodies">
        <Button style={{width:600,background:'#2784f0',color:"white",fontWeight:600}} >MELODIES</Button>
      </Link>  
      </Box>
      <Meditation/>
        <Option/>
        {/* <Footer/> */}
            
        </div>
    );
}

export default Relax;