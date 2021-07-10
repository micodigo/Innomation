import React from "react";
import cls from "./Dropdown.module.scss";

function Dropdown() {
  return (
    <div className={cls.dc}>
      <a href="#" className={cls.dca}>
        Link 1
      </a>
      <h1>Big</h1>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  );
}

export default Dropdown;
