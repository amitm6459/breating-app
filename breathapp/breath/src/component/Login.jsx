import { Box, Button, Link, Typography, styled } from '@mui/material';
import React from 'react';

const Component =styled(Box)`
display:flex;
align-items:center;
flex-direction:column;
background:rgb(180 ,205,230);
height:100vh;

`
const Image=styled('img')`
height:10vh;
width:10vh;
border:2px solid blue;
border-radius:50%;
padding:5px;
margin-top:30px;
` 
const Image2 =styled('img')`
height:35vh;
width:35vh;
border-radius:50%;
margin-top:20px;
`
const Text1=styled(Typography)`
font-size:40px;
font-weight:600;
margin-top:20px;
`
const SignUp=styled(Button)`
width:20%;
background:blue;
border-radius:25px;
color:white;
font-weight:600;
font-size:20px;
margin-top:20px;
`
const Url="https://breathlly.netlify.app/assets/logo.png";
const Url2="https://breathlly.netlify.app/assets/relax5.webp";
function Login(props) {
    return (
        <Component>
           <Image src={Url} alt='img' />
           <Image2 src={Url2} alt='img2'/>
           <Text1>Breathings</Text1>
           <Typography style={{fontWeight:600}}>Mindful Breathing app</Typography>
           <SignUp>SIGN UP</SignUp>
           <Typography style={{marginTop:20,fontWeight:500}}>Already have an account? <Link>Login</Link></Typography>
        </Component>
    );
}

export default Login;