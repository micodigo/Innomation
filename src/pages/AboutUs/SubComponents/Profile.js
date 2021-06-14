import React from "react";
import classes from "./Profile.module.scss";
import profile from "../../../Images/Profile/profile.jpg";

function Profile() {
  return (
    <section className={classes.section}>
      <div className={classes.profile}>
        <div className={classes.profile_image}>
          <img src={profile} alt="" className={classes.image} />
        </div>
        <div className={classes.profile_description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur
            possimus, ex quidem aliquam amet reiciendis? Nisi nemo natus nulla!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            tempore ea, aperiam nesciunt numquam culpa quis aspernatur possimus
            doloribus quibusdam.
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
