import React from "react";
import picon from "../../../Images/phone-icon2.png";
import addrs from "../../../Images/add.png";
import email from "../../../Images/emailicon.png";
import cls from "./Address.module.scss";

function Address() {
  return (
    <div>
      <div className={cls.div4}>
        <div>
          <img src={addrs} alt="" className={cls.img} />
        </div>
        <div>
          <img src={picon} alt="" className={cls.img} />
        </div>
        <div>
          <img src={email} alt="" className={cls.img} />
        </div>
      </div>
      <div className={cls.div42}>
        <div>
          <h2>Address</h2>
        </div>
        <div>
          <h2>+91-9958075432</h2>
        </div>
        <div>
          <h2>saurabhgupta0502@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default Address;
