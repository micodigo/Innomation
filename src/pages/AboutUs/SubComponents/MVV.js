import React from "react";
import classes from "./MVV.module.scss";

function MVV() {
  return (
    <section className={classes.section}>
      <div className={`${classes.mission} ${classes.box}`}>
        <h3 className={classes.heading_secondary}>Our Mission</h3>
        <p className={classes.description}>
          Build Trusted Solutions for the Clients to make them more productive
          and successful.
        </p>
      </div>
      <div className={`${classes.vision} ${classes.box}`}>
        <h3 className={classes.heading_secondary}>Our Values</h3>
        <p className={classes.description}>
          Utilize latest trends & technologies available in market and implement
          them to provide Smart, Safe, and Best solutions to our customers with
          the highest-quality, cost-effective and reliability.
        </p>
      </div>
      <div className={`${classes.values} ${classes.box}`}>
        <h3 className={classes.heading_secondary}>Our Vision</h3>
        <p className={classes.description}>
          <b>Accountability</b>: Each of us is responsible for our words, our
          actions, and our results. <br />
          <b>Respect</b>: We value everyone and treat people with dignity and
          professionalism. <br />
          <b>Integrity</b>: We build trust through responsible actions and
          honest relationships. <br />
          <b>Teamwork</b>: We achieve more when we collaborate and all work
          together.
        </p>
      </div>
    </section>
  );
}

export default MVV;
