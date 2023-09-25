import React from 'react';
import { Box, Typography, styled,Stack,  } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { data } from '../data/data2';
import {  useParams } from 'react-router-dom';


const Component=styled(Box)`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background:radial-gradient(circle,rgba(238,174,202,1) 0%,rgba(236,175,203,1) 3%,rgba(233,175,204,1) 6%,rgba(233,175,204,1) 6%,rgba(148,187,233,1) 100%)
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



function SleepSongs(props) {
    const {Sleepid}=useParams();
    // alert( data[id-1].audio);
    return (
        <Component >
           <TextMeditation style={{fontWeight:600,fontSize:30,display:"flex",justifyContent:"center",paddingTop:10}}><SelfImprovementIcon style={{fontWeight:600,fontSize:40}}/> {data[Sleepid-1].title}</TextMeditation>
           <Image src={data[Sleepid-1].url} alt='Img'/>
           <Typography style={{marginTop:20,fontSize:24,}}>Live From Space</Typography>
           <Typography style={{color:"#00000099",fontSize:16}}>Mr.Amit Mali</Typography>
           <Stack>
           {data[Sleepid-1].audio.map(item=>
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
    )
           

}
export default SleepSongs;