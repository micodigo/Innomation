import React from "react";
import classes from "./Overview.module.scss";
import logo from "../../../Images/logo-small.png";
function Overview() {
  return (
    <section className={classes.section}>
      <div className={classes.image}>
        <img src={logo} alt="" className={classes.logo} />
      </div>
      <div className={classes.overview}>
        <h2 className={classes.heading_secondary}>Company Overview</h2>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          quibusdam, exercitationem commodi officiis atque fugiat. Ratione sequi
          sint quaerat fugit earum dolores ullam itaque, facilis perferendis!
          Eum commodi id iste facilis, sint magnam suscipit amet, pariatur
          nostrum saepe, dolores dolor. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aperiam blanditiis sit illum possimus neque
          dignissimos est ducimus aspernatur, assumenda amet beatae, a
          voluptatem voluptate natus tempore quia velit temporibus vel placeat
          cum! Dignissimos dicta assumenda maxime, in consectetur corporis
          minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          accusantium sequi illo molestiae facilis provident quam temporibus
          veniam enim ducimus aliquid explicabo, tempore impedit est at ex
          pariatur sit error.
        </p>
      </div>
    </section>
  );
}

export default Overview;
