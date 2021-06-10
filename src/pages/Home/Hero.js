import React from "react";
import hero1 from "../../Images/hero Images/1.png";
import hero2 from "../../Images/hero Images/2.png";
import hero3 from "../../Images/hero Images/3.png";
import classes from "./Hero.module.scss";

const images = [hero1, hero2, hero3];
const delay = 3000;
export default function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);
  return (
    <div className={classes.hero}>
      <div
        className={classes.hero_slider}
        style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
      >
        {images.map((element, index) => (
          <div className={classes.slide} key={index}>
            <img src={element} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
