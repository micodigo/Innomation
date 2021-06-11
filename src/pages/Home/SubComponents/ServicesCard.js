import React from "react";
import classes from "./ServicesCard.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cloud from "../../../Images/Services/Cloud.png";
import Automation from "../../../Images/Services/Automation.png";
import Commissioning from "../../../Images/Services/Commissioning.png";
import Consultancy from "../../../Images/Services/Consultancy.png";
import PanelBuilding from "../../../Images/Services/PanelBuilding.png";
import PLC from "../../../Images/Services/PLC.png";
import ThirdParty from "../../../Images/Services/ThirdParty.png";
import Training from "../../../Images/Services/Training.png";
export default function ServicesCard() {
  const [state, setstate] = useState({
    objects1: [{ id: 1 }, { id: 2 }],
    objects2: [
      {
        id: 1,
        name1: "Machine Automation",
        name2: "Third Party Integration",
        class1: "close",
        class2: "close",
        image1: Automation,
        image2: ThirdParty,
      },
      {
        id: 2,
        name1: "Panel Building",
        name2: "PLC Programming",
        class1: "close",
        class2: "close",
        image1: PanelBuilding,
        image2: PLC,
      },
      {
        id: 3,
        name1: "Engineering & Commissioning",
        name2: "Industrial Automation Training",
        class1: "close",
        class2: "close",
        image1: Commissioning,
        image2: Training,
      },
      {
        id: 4,
        name1: "Consultancy",
        name2: "Industial IOT",
        class1: "close",
        class2: "close",
        image1: Consultancy,
        image2: Cloud,
      },
    ],
  });

  const changestate = (obj2, i, j) => {
    for (let a = 0; a < 2; a++) {
      for (let b = 0; b < 4; b++) {
        if (a === i && b === j) {
          if (i === 0 && obj2[j].class1 === "close") {
            obj2[j].class1 = "open";
          } else if (i === 0 && obj2[j].class1 === "open") {
            obj2[j].class1 = "close";
          } else if (i === 1 && obj2[j].class2 === "open") {
            obj2[j].class2 = "close";
          } else {
            obj2[j].class2 = "open";
          }
        } else {
          if (a === 0) obj2[b].class1 = "close";
          else obj2[b].class2 = "close";
        }
      }
    }
    return obj2;
  };

  const toggleHandler = (index, j) => {
    setstate({
      ...state,
      objects2: changestate(state.objects2, index, j),
    });
  };
  const toggleclass = (index, j) => {
    if (index === 0 && state.objects2[j].class1 === "close")
      return [
        `${classes.servicecard} ${classes.servicecard_inactive}`,
        `${classes.toggle_info} ${classes.toggle_info_close}`,
      ];
    else if (index === 0 && state.objects2[j].class1 === "open")
      return [
        `${classes.servicecard} ${classes.servicecard_active}`,
        `${classes.toggle_info} ${classes.toggle_info_open}`,
      ];
    else if (index === 1 && state.objects2[j].class2 === "close")
      return [
        `${classes.servicecard} ${classes.servicecard_inactive}`,
        `${classes.toggle_info} ${classes.toggle_info_close}`,
      ];
    else
      return [
        `${classes.servicecard} ${classes.servicecard_active}`,
        `${classes.toggle_info} ${classes.toggle_info_open}`,
      ];
  };
  return (
    <section className={classes.section}>
      <div className={`${classes.row} ${classes.section_heading}`}>
        <h4 className={classes.heading_tertiary}>Our Services</h4>
        <h2 className={classes.heading_secondary}>
          Explore Our Market Leading Services
        </h2>
      </div>
      {state.objects1.map((element1, index) => (
        <div key={index} className={classes.row}>
          {state.objects2.map((element2, j) => (
            <div
              key={j}
              className={classes.col_1_of_4}
              // onClick={() => toggleHandler(index, j)}
            >
              <div
                className={toggleclass(index, j)[0]}
                // onClick={() => toggleHandler(index, j)}
              >
                <div className={classes.servicecard_content}>
                  <div className={classes.icon}>
                    {index === 0 ? (
                      <img src={element2.image1} alt="" />
                    ) : (
                      <img src={element2.image2} alt="" />
                    )}
                  </div>
                  <div className={classes.heading}>
                    {index === 0 ? (
                      <h2>{element2.name1}</h2>
                    ) : (
                      <h2>{element2.name2}</h2>
                    )}
                  </div>
                </div>
                <div
                  className={toggleclass(index, j)[1]}
                  onClick={() => toggleHandler(index, j)}
                >
                  <span className={classes.left}></span>
                  <span className={classes.right}></span>
                </div>
                <div className={classes.flap}>
                  <div className={classes.flap_description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere, nesciunt? Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Facere, nesciunt?
                    <div className={classes.button}>
                      <Link to="/AboutUs" className={classes.btn}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
