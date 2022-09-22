import React from "react";
import classes from "./Process.module.scss";
function Process() {
  return (
    <section className={classes.section} id="1">
      <div className={classes.row}>
        <div className={classes.section_heading}>
          <h4 className={classes.heading_tertiary}>Our Process</h4>
          <h2 className={classes.heading_secondary}>
            the 4 step process for leading change
          </h2>
        </div>
      </div>
      {/* <div className={classes.row}> */}
      <div className={classes.process}>
        <div>
          <div className={`${classes.process_step} ${classes.concept}`}></div>
          <h4
            className={`${classes.heading_tertiary} ${classes.concept_detail}`}
          >
            Initial Concept
          </h4>
        </div>
        <div>
          <div className={`${classes.process_step} ${classes.analysis}`}></div>
          <h4
            className={`${classes.heading_tertiary} ${classes.concept_detail}`}
          >
            Market Analysis
          </h4>
        </div>
        <div>
          <div className={`${classes.process_step} ${classes.grow}`}></div>
          <h4
            className={`${classes.heading_tertiary} ${classes.concept_detail}`}
          >
            Grow Bussiness
          </h4>
        </div>
        <div>
          <div className={`${classes.process_step} ${classes.support}`}></div>
          <h4
            className={`${classes.heading_tertiary} ${classes.concept_detail}`}
          >
            Fast Support
          </h4>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Process;
