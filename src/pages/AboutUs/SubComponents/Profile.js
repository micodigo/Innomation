import React from "react";
import classes from "./Profile.module.scss";
import profile from "../../../Images/Profile/profile.jpg";

function Profile() {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div className={classes.section_heading}>
          {/* <h4 className={classes.heading_tertiary}>Our Process</h4> */}
          <h2 className={classes.heading_secondary}>
            Message For Managing Partner
          </h2>
        </div>
      </div>
      <div className={classes.profile}>
        <div className={classes.profile_image}>
          <img src={profile} alt="" className={classes.image} />
        </div>
        <div className={classes.profile_description}>
          <p>
            First and foremost, I would like to thank all our esteemed
            customers, suppliers, business associates, employees and all those
            who have been associated with us professionally. <br /> In today’s
            dynamic world where technology is upgrading leaps and bounds, it has
            become really challenging for our clients to keep pace with the
            latest technological trends. <br /> Since our inception, we have
            worked with one prime goal of serving reliable, trustworthy,
            technological and timely solutions to all our customers and
            prospects. <br /> Our consistent success and growth goes through the
            success of all our associates. We believe in listening to our
            customers’ requirements, thinking (rather deep diving) for the
            possible solutions and solving the customers’ needs with latest
            technology products and services.
            <br />
            InnoMation is basically Innovative Automation where we utilize
            latest trends in Industrial Automation to meet our customers’ growth
            demands.
          </p>
        </div>
        <div className={classes.profile_name}>
          <h4>- Saurabh Gupta</h4>
        </div>
      </div>
    </section>
  );
}

export default Profile;
