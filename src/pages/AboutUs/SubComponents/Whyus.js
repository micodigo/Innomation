import React from "react";
import classes from "./Whyus.module.scss";
import Experience from "../../../Images/whyus/Experience.png";
import Ontime from "../../../Images/whyus/Ontime.png";
import Quality from "../../../Images/whyus/Quality.png";
import Satisfaction from "../../../Images/whyus/Satisfaction.png";

function Whyus() {
  return (
    <section className={classes.section}>
      <div className={classes.whyus}>
        <div className={`${classes.card} ${classes.otd}`}>
          <div className={classes.icon}>
            <img src={Ontime} alt="" />
          </div>
          <div className={classes.description}>
            <h3 className={classes.description_text}>On-Time Delivery</h3>
            <p>
              The first mark of good business is the ability to deliver it's
              product or service on time and in the condition which the client
              was led to expect.
              {/* Thats's why we focus on On-Time
              Delivery. */}
            </p>
          </div>
        </div>
        <div className={`${classes.card} ${classes.quality}`}>
          <div className={classes.icon}>
            <img src={Quality} alt="" />
          </div>
          <div className={classes.description}>
            <h3 className={classes.description_text}>Quality</h3>
            <p>
              Quality in a service or product is not what you put into it. We
              want our customer to get the best.Thats's why we focus on Qualtiy.
              {/* Thats's why we focus on Qualtiy. */}
            </p>
          </div>
        </div>
        <div className={`${classes.card} ${classes.experience}`}>
          <div className={classes.icon}>
            <img src={Experience} alt="" />
          </div>
          <div className={classes.description}>
            <h3 className={classes.description_text}>Experience</h3>
            <p>
              Experience matter for implementing solution in any industry. We
              have 10+ years of experience and successfully deliverd 500+
              projects.
            </p>
          </div>
        </div>
        <div className={`${classes.card} ${classes.satisfaction}`}>
          <div className={classes.icon}>
            <img src={Satisfaction} alt="" />
          </div>
          <div className={classes.description}>
            <h3 className={classes.description_text}>Satisfaction</h3>
            <p>
              It’s our job every day to make every important aspect of the
              customer experience a little bit better. Thats's why we focus on
              Customer Satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyus;
