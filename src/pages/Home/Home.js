import React from "react";
// import classes from "./Home.module.scss";
import Hero from "./SubComponents/Hero";
import Intro from "./SubComponents/Intro";
import Ourpartners from "./SubComponents/Ourpartners";
import Process from "./SubComponents/Process";
import ServicesCard from "./SubComponents/ServicesCard";
import Testimonials from "./SubComponents/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesCard />
      <Process />
      <Testimonials />
      <Ourpartners />
    </>
  );
}
export default Home;
