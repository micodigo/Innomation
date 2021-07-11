import React from "react";
import Portfolio from "../../components/Portfolio";
import hero from "./../Services/Images/2.png";
import Hero from "../../components/CommonHero";

function Industries() {
  const data = {
    services: [
      {
        name: "Machine Automation",
        image: "xyz",
      },
      {
        name: "Machine Automation",
        image: "xyz",
      },
      {
        name: "Machine Automation",
        image: "xyz",
      },
      {
        name: "Machine Automation",
        image: "xyz",
      },
      {
        name: "Machine Automation",
        image: "xyz",
      },
    ],
  };
  return (
    <>
      <Hero name="Industries" link="Industries" />
      <Portfolio data={data} hero={hero}></Portfolio>
    </>
  );
}

export default Industries;
