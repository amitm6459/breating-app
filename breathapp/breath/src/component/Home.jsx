import React from "react";
import Nav from "./Nav";
import Time from "./Time";
import Meditation from "./Meditation";
import Option from "./Option";
import Footer from "./Footer";

function Home(props) {
  return (
    <div>
      {/* <Nav /> */}
      <Time />
      <Meditation />
      <Option />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
