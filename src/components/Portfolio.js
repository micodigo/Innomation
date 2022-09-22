import React from "react";
import cls from "./Portfolio.module.scss";

function Portfolio(props) {
  console.log(props.hero);
  return (
    <>
      <div
        className={cls.hero}
        style={{ backgroundImage: `url(${props.hero})` }}
      >
        {/* <img src={props.hero} alt="" /> */}
      </div>
      {props.data.services.map((element, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <div className={`${cls.objects} ${cls.object1}`}>
              <div style={{ display: "inline-block", border: "2px solid red" }}>
                {element.name}
              </div>
              <div style={{ display: "inline-block" }}>
                <img src={element.image} alt="" />
              </div>
            </div>
          ) : (
            <div className={`${cls.objects} ${cls.object2}`}>
              <div style={{ display: "inline-block" }}>
                <img src={element.image} alt="" />
              </div>
              <div
                style={{ display: "inline-block", border: "2px solid blue" }}
              >
                {element.name}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Portfolio;
