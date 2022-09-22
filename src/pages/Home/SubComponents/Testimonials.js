import classes from "./Testimonials.module.scss";
import React from "react";
// import user from "../../../Images/user.png";
import "../../../themify-icons.css";

function Testimonials() {
  return (
    <section className={classes.section}>
      <div className={`${classes.row} ${classes.section_heading}`}>
        <h4 className={classes.heading_tertiary}>See here</h4>
        <h2 className={classes.heading_secondary}>
          What our clients say about us
        </h2>
      </div>
      <div className={classes.row}>
        <div className={classes.testimonials}>
          <div className={classes.testimonials_testimonial}>
            {/* //////// */}
            <div className={classes.box}>
              <div className={classes.message}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, quam? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laudantium, voluptatum.
              </div>
              <div className={classes.pointer}></div>
            </div>
            {/* ///////// */}
            <div className={classes.profile}>
              <div className={classes.profile_image}></div>
              <div className={classes.profile_name}>
                <h3>Mayank Pal</h3>
                <div className={classes.ratings}>
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.testimonials_testimonial}>
            <div className={classes.box}>
              <div className={classes.message}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, quam? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laudantium, voluptatum.
              </div>
              <div className={classes.pointer}></div>
            </div>
            <div className={classes.profile}>
              <div className={classes.profile_image}></div>
              <div className={classes.profile_name}>
                <h3>Mayank Gupta</h3>
                <div className={classes.ratings}>
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.testimonials_testimonial}>
            <div className={classes.box}>
              <div className={classes.message}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, quam? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laudantium, voluptatum.
              </div>
              <div className={classes.pointer}></div>
            </div>
            <div className={classes.profile}>
              <div className={classes.profile_image}></div>
              <div className={classes.profile_name}>
                <h3>Harshit Gupta</h3>
                <div className={classes.ratings}>
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                  <i className="ti-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
