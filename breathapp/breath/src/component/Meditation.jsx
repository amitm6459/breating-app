import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { data } from '../data/Data';
import { useNavigate } from 'react-router-dom';


const MainBox2=styled(Box)`
${'' /* border:1px solid; */}
display:flex;
flex-direction:column;
justify-content:space-around;
padding:16px;
`
const MeditationText = styled(Box)`
font-size:25px;
font-weight:500;
color:#00008B;
`

function Meditation(props) {
  const navTo= useNavigate();
    return (
        <MainBox2>
            <MeditationText>
                 <i class="fa-solid fa-spa" style={{fontSize:"25px ",margin:"10px 7px 10px 0px"}}></i>Meditation
            </MeditationText>
            <Divider style={{margin:"16px 0px"}}/>
            <Grid container spacing={2}>
                {data &&  data.map(item=>(
                   <Grid item sm={12} md={4} lg={3} xl={3}   >
                    <Card sx={{maxWidth:340,cursor:"pointer"}} onClick={()=>navTo(`/songs/${item.id}`)}>
                        <CardMedia image={item.url} sx={{height:165}} />
                        <CardContent>
                            <Typography style={{fontSize:20}}>{item.title}</Typography>
                            <Typography style={{fontSize:14,color:"gray"}}>{item.subTitle}</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                ))} 
            </Grid>
        </MainBox2>
    );
}

export default Meditation;