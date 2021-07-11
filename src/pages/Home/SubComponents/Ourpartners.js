import React, { useRef } from "react";

import classes from "./Ourpartners.module.scss";
import Parle from "../../../Images/customers/Parle.png";
import Bretannia from "../../../Images/customers/Britannia.png";
import Anmol from "../../../Images/customers/Anmol.png";
import Itc from "../../../Images/customers/Itc.png";
import Mondelez from "../../../Images/customers/Mondelez.png";
import Kraft from "../../../Images/customers/Kraft.png";
import Hul from "../../../Images/customers/Hul.png";
import Biobiscuit from "../../../Images/customers/Biobiscuit.png";
import Bisk from "../../../Images/customers/Bisk.png";
import Bonn from "../../../Images/customers/Bonn.png";
import Gk from "../../../Images/customers/Gk.png";
import Patanjali from "../../../Images/customers/Patanjali.png";
import Pladis from "../../../Images/customers/Pladis.png";
import Sobisco from "../../../Images/customers/Sobisco.png";
import Parson from "../../../Images/customers/Parson.png";

export default function Ourpartners() {
  const input = useRef();
  return (
    <section className={classes.section}>
      <div className={`${classes.row} ${classes.section_heading}`}>
        <h4 className={classes.heading_tertiary}>Our Amazing</h4>
        <h2 className={classes.heading_secondary}>Clients</h2>
      </div>
      <div className={classes.slide_window}>
        <ul className={classes.slider} ref={input}>
          <li>
            <img src={Parle} alt="" />
          </li>
          <li>
            <img src={Bretannia} alt="" />
          </li>
          <li>
            <img src={Anmol} alt="" />
          </li>
          <li>
            <img src={Itc} alt="" />
          </li>
          <li>
            <img src={Mondelez} alt="" />
          </li>
          <li>
            <img src={Kraft} alt="" />
          </li>
          <li>
            <img src={Hul} alt="" />
          </li>
          <li>
            <img src={Biobiscuit} alt="" />
          </li>
          <li>
            <img src={Bisk} alt="" />
          </li>
          <li>
            <img src={Bonn} alt="" />
          </li>
          <li>
            <img src={Gk} alt="" />
          </li>
          <li>
            <img src={Patanjali} alt="" />
          </li>
          <li>
            <img src={Pladis} alt="" />
          </li>
          <li>
            <img src={Sobisco} alt="" />
          </li>
          <li>
            <img src={Parson} alt="" />
          </li>
          <li>
            <img src={Parle} alt="" />
          </li>
          <li>
            <img src={Bretannia} alt="" />
          </li>
          <li>
            <img src={Anmol} alt="" />
          </li>
          <li>
            <img src={Itc} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}
