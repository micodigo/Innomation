import React from "react";
import Hero from "../../components/CommonHero";
import MVV from "./SubComponents/MVV";
import Overview from "./SubComponents/Overview";
import Profile from "./SubComponents/Profile";
import Whyus from "./SubComponents/Whyus";
function AboutUs() {
  // const profileRef = useRef();
  return (
    <>
      <Hero name="About Our Company" link="AboutUs" />
      <Overview />
      <MVV />
      <Profile />
      <Whyus />
    </>
  );
}
export default AboutUs;
