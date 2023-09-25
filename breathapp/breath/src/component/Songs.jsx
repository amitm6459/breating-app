import { Box, Typography, styled,Stack } from '@mui/material';
import React from 'react';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { data } from '../data/Data';
import { useParams } from 'react-router-dom';

const Component=styled(Box)`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background-image: linear-gradient(64.3deg,rgba(254,122,152,.81) 17.7%,rgba(255,206,134,1) 64.7%,rgba(172,253,163,.64) 112.1%);
`
const TextMeditation = styled(Typography)`
color:#00008B;
`
const Image=styled('img')`
    width:25vh;
    height:25vh;
    border-radius:50%;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    transition:2s;
    text-align:center;
    margin-top:10px;
   &:hover{
    transform:rotate(360deg)
   }
`

const Url='https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_960_720.jpg';

function Songs(props) {
    const {id}=useParams();
    // alert( data[id-1].audio);
    return (
        <Component >
           <TextMeditation style={{fontWeight:600,fontSize:30,display:"flex",justifyContent:"center",paddingTop:10}}><SelfImprovementIcon style={{fontWeight:600,fontSize:40}}/> {data[id-1].title}</TextMeditation>
           <Image src={Url} alt='Img'/>
           <Typography style={{marginTop:20,fontSize:24,}}>Live From Space</Typography>
           <Typography style={{color:"#00000099",fontSize:16}}>Mr.Amit Mali</Typography>
           <Stack>
           {data[id-1].audio.map(item=>
            <audio controls style={{marginTop:30}} src={item}/>
            )} 
            
           </Stack>
           
          
           <Box pb={4}>
              
              <FavoriteBorderIcon style={{margin:"30px 20px"}}/>
              <PlaylistAddIcon style={{margin:"30px 20px"}}/>
              <AccessAlarmIcon style={{margin:"30px 20px"}}/>
              <MoreVertIcon style={{margin:"30px 20px"}}/>
            </Box>
        </Component>
    );
}

export default Songs;