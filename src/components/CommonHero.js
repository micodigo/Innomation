import React from "react";
import classes from "./CommonHero.module.scss";
import "../themify-icons.css";

function Hero(props) {
  return (
    <section className={classes.section}>
      <div className={classes.section_heading}>
        <div className={classes.box}></div>
        <div className={classes.heading}>
          <h1>{props.name}</h1>
        </div>
        <div className={classes.route}>
          <i className="ti-home"></i> Home &#62; <span>{props.link}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
