import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

const MainBox = styled(Box)`
  height: 500px;
  ${'' /* border: 1px solid; */}
`;
const LefttBox = styled(Box)`
  height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const RightBox = styled(Box)`
  height: 55%;
  display: flex;
  justify-content: center;
  margin-top:10px;
`;
const Text1 = styled(Typography)`
  font-size: 40px;
  font-weight: 500;
  height: 35%;
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;
const DayButton = styled(Button)`
  
  margin-top:5px;
`;
const TimeButton = styled(Button)`
  margin-top:5px;
`;
const Image = styled("img")`
   border-radius:50%;
   height:35vh;
   margin-top:7px;
   transition:2s;
   &:hover{
    transform:rotateY(180deg)
   }
`
   


const Url = "https://breathlly.netlify.app/assets/welcome.jpeg";

function Time(props) {
    
  const today = new Date();
  const dayNumber = today.getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = weekdays[dayNumber];

  const day = today.getDate();
  const month = today.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[month];
  const Datenew = dayName + ", " + day + "  " + monthName;

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  const formattedTime =
    hours12 + ":" + addLeadingZero(minutes) + " " + meridiem;

  function addLeadingZero(time) {
    return time < 10 ? "0" + time : time;
  }

  const [userMsg, setUsermsg] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 12) {
      setUsermsg("Good Morning");
    } else if (hours >= 12 && hours < 17) {
      setUsermsg("Good Afternoon");
    } else {
      setUsermsg("Good Evening");
    }
  }, [userMsg]);

  return (
    <MainBox>
      <LefttBox>
        <Text1>{userMsg},Dear</Text1>
        <Box style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
          <DayButton variant="outlined">{Datenew}</DayButton>
          <TimeButton variant="outlined">{formattedTime}</TimeButton>
        </Box>
      </LefttBox>
      <RightBox>
        <Image src={Url} alt="Img" style={{borderRadius:"50%",height:"35vh"}}/>
      </RightBox>
    </MainBox>
  );
}

export default Time;
