import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, Typography, styled } from "@mui/material";

import Option from "./Option";
import { useNavigate } from "react-router-dom";
import { data } from "../data/data2";


const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding:8px 16px;
`

function Sleep(props) {
  const navTo= useNavigate();
  return (
    <div>
     
      <Paper elevation={20}>
        <Component>
          <i class="fa-solid fa-arrow-left" onClick={()=>navTo("/")}></i>
          <Typography style={{ fontSize: 25, fontWeight: 600, color: "#00008B" }}>Sleep</Typography>
          <i class="fa-solid fa-stopwatch-20"></i>
        </Component>
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button>All</Button>
          <Button>MyFavorite</Button>
          <Button>Stories</Button>
          <Button>Music</Button>
        </Box>   
      </Paper>
      <Box style={{margin:"8px 16px"}}>
        <Grid container spacing={2} >
                { data && data.map(item=>(
                   <Grid item sm={12} md={4} lg={3} xl={3}   >
                    <Card sx={{maxWidth:340,cursor:"pointer"}} onClick={()=>navTo(`/sleepsongs/${item.Sleepid}`)}>
                        <CardMedia image={item.url} sx={{height:165}}/>
                        <CardContent>
                            <Typography style={{fontSize:20}}>{item.title}</Typography>
                            <Typography style={{fontSize:14,color:"gray"}}>{item.subTitle}</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                ))} 
            </Grid>
        </Box>
        <Option/>
        {/* <Footer/> */}
    </div>
  );
}

export default Sleep;
