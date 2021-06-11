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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            tempora cumque fugiat quos cupiditate ad obcaecati adipisci
            assumenda incidunt natus dignissimos, deleniti nihil sapiente vel
            autem nobis earum? Doloremque rerum laborum harum aliquam impedit
            repudiandae ratione eos quasi quas quisquam soluta ad, culpa
            reiciendis consectetur esse quia ea, perspiciatis, commodi fugit
            optio molestiae nihil repellendus. Architecto eligendi impedit
            reprehenderit libero id, distinctio voluptate ad possimus unde
            consectetur nam expedita dicta aliquam temporibus sint ullam eveniet
            similique magni aut. Eveniet quia esse error inventore obcaecati
            sunt ipsa quas facilis mollitia autem, itaque unde dolorem delectus
            blanditiis! Architecto, impedit. Perferendis, nam optio?
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
