import React from "react";
// import classes from "./Home.module.scss";
import Hero from "./Home/Hero";
import Intro from "./Home/Intro";
import Ourpartners from "./Home/Ourpartners";
import Process from "./Home/Process";
import ServicesCard from "./Home/ServicesCard";
import Testimonials from "./Home/Testimonials";

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
