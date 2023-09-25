import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/Home";
import Sleep from "./component/Sleep";
import MeditationComponent from "./component/MeditationComponent";
import Relax from "./component/Relax";
import Settings from "./component/Settings";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Songs from "./component/Songs";
import SleepSongs from "./component/SleepSongs";
import Melodies from "./component/Melodies";
import Login from "./component/Login";

function App() {
  const location = useLocation();
  let a =location.pathname==="/loginhome"
  console.log(a);
  return (
   
     <div>
     {!a && <Nav/>}
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/sleep" element={<Sleep/>}/>
         <Route path="/meditation" element={<MeditationComponent/>}/>
         <Route path="/relax" element={<Relax/>}/>
         <Route path="/settings" element={<Settings/>}/>
         <Route path="/songs/:id" element={<Songs/>}/>
         <Route path="/sleepsongs/:Sleepid" element={<SleepSongs/>}/>
         <Route path="/melodies" element={<Melodies/>}/>
         <Route path="/loginhome" element={<Login/>}/>
         
        </Routes>
        {!a && <Footer/>}
        </div>
   
  );
}

export default App;
