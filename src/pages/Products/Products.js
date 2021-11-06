import React from "react";
import Portfolio from "../../components/Portfolio";
import hero from "./../Services/Images/3.png";
import Hero from "../../components/CommonHero";
import HMI from "./Image/HMIs.jpg";
import ISP1 from "./Image/IndustrialSpareparts1.jpg";
import PA from "./Image/PanelAccessories.jpg";
import PLC from "./Image/PLCs.png";
import Sensor from "./Image/Sensors.jpeg";

function Products() {
  const data = {
    services: [
      {
        name: "Machine Automation",
        image: HMI,
      },
      {
        name: "Machine Automation",
        image: ISP1,
      },
      {
        name: "Machine Automation",
        image: PA,
      },
      {
        name: "Machine Automation",
        image: PLC,
      },
      {
        name: "Machine Automation",
        image: Sensor,
      },
    ],
  };
  return (
    <>
      <Hero name="Produts" link="Products" />
      <Portfolio data={data} hero={hero}></Portfolio>
    </>
  );
}

export default Products;
