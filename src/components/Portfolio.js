import React from "react";
import cls from "./Portfolio.module.scss";

function Portfolio(props) {
  // console.log(props.hero);
  return (
    <>
      <div
        className={cls.hero}
        style={{ backgroundImage: `url(${props.hero})` }}
      >
        {/* <img src={props.hero} alt="" /> */}
      </div>
      <div className={cls.section}>
        {props.data.services.map((element, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <div className={`${cls.objects} ${cls.object1}`}>
                {/* <div> */}
                <img src={element.image} alt="" className={cls.div1Images} />
                <h2>{element.name}</h2>
                {/* </div> */}
                <div className={cls.TextDetails}>
                  <h3>{element.name}</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, quam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laudantium, voluptatum.
                  </p>
                </div>
              </div>
            ) : (
              <div className={`${cls.objects} ${cls.object2}`}>
                {/* <div style={{ border: "2px solid blue" }}> */}
                <img src={element.image} alt="" />
                <h2>{element.name}</h2>
                {/* </div> */}
                <div className={cls.TextDetails}>
                  <h3>{element.name}</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, quam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laudantium, voluptatum.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;

// style={{ display: "inline-block" }}
// style={{ display: "inline-block", border: "2px solid blue" }}
