import classes from "./Intro.module.scss";
import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div className={classes.section_heading}>
          <h2 className={classes.heading_secondary}>
            ABOUT <span className={classes.companyname}> InnoMation</span>
          </h2>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.description}>
          <p>
            <b>
              “Our way goes through strong and prompt customer service and
              customer satisfaction is our prime mover”
            </b>
            <br />
            Keeping in mind the above core policy, InnoMation Tech Services is
            founded in year 2020 as a venture with headquarters in Delhi, the
            capital city of India. Our founding team comprise of people with
            rich experience in the field of Plant Automation, Erection &
            Commissioning, Control System Design of various process industries
            notably Food & Beverages, Power, Oil & Gas, HVAC, FMCG, Energy,
            Sub-Stations etc. We have a team of energetic and smart people
            having domain expertise in the field of Industrial Automation. Our
            engineers have hands-on experience on various challenging jobs and
            different leading automation brands.
          </p>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.button}>
          <Link to="/AboutUs" className={classes.btn}>
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Intro;
