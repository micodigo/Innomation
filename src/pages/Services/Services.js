import React from "react";
import Portfolio from "../../components/Portfolio";
import hero from "./Images/1.png";
import Hero from "../../components/CommonHero";
import Consultancy from "./Images/Consultancy.jpg";
import PanelBuilding from "./Images/PanelBuilding.jpg";
import EngineeringandCommissioning from "./Images/EngineeringandCommissioning.jpg";
import iiot from "./Images/iiot.jpg";
import MachineAutomation from "./Images/MachineAutomation.jpg";
import PLCProgramming from "./Images/PLCProgramming.jpg";
import ThirdPartyIntegration from "./Images/ThirdPartyIntegration.jpg";
import Training from "./Images/Training.jpg";
function Services() {
  const data = {
    services: [
      {
        name: "Consultancy",
        image: Consultancy,
      },
      {
        name: "Machine Automation",
        image: PanelBuilding,
      },
      {
        name: "Machine Automation",
        image: EngineeringandCommissioning,
      },
      {
        name: "Machine Automation",
        image: iiot,
      },
      {
        name: "Machine Automation",
        image: MachineAutomation,
      },
      {
        name: "Machine Automation",
        image: PLCProgramming,
      },
      {
        name: "Machine Automation",
        image: ThirdPartyIntegration,
      },
      {
        name: "Machine Automation",
        image: Training,
      },
    ],
  };
  return (
    <>
      <Hero name="Services" link="Services" />
      <Portfolio data={data} hero={hero}></Portfolio>
    </>
  );
}

export default Services;
