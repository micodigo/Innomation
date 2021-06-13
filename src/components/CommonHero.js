import React from "react";
import classes from "./CommonHero.module.scss";
import "../themify-icons.css";

function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.section_heading}>
        <div className={classes.box}></div>
        <div className={classes.heading}>
          <h1>About Our Company</h1>
        </div>
        <div className={classes.route}>
          <i className="ti-home"></i> Home &#62; <span>About Us</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
