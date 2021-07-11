import React from "react";
import Portfolio from "../../components/Portfolio";
import hero from "./../Services/Images/3.png";
import Hero from "../../components/CommonHero";

function Products() {
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
      <Hero name="Produts" link="Products" />
      <Portfolio data={data} hero={hero}></Portfolio>
    </>
  );
}

export default Products;
