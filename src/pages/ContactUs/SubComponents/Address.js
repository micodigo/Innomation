import React from "react";
import picon from "../../../Images/phone-icon2.png";
import addrs from "../../../Images/add.png";
import email from "../../../Images/emailicon.png";
import cls from "./Address.module.scss";

function Address() {
  return (
    <div>
      <div className={cls.AddressDetails}>
        <div>
          <img src={addrs} alt="" className={cls.img} />
          <h2>
            InnoMation Tech Services
            <br />
            <span className={cls.span}>Vivek Vihar, Delhi</span>
          </h2>
        </div>
        <div>
          <img src={picon} alt="" className={cls.img} />
          <h2>+91-9958075432</h2>
        </div>
        <div>
          <img src={email} alt="" className={cls.img} />
          <h2>innomation.ts@gmail.com</h2>
        </div>
      </div>
      {/* <div className={cls.div42}>
        <div style={{ textAlign: "center" }}>
          <h2>
            InnoMation Tech Services
            <br />
            <span className={cls.span}>Vivek Vihar, Delhi</span>
          </h2>
        </div>
        <div>
          <h2>+91-9958075432</h2>
        </div>
        <div>
          <h2>innomation.ts@gmail.com</h2>
        </div>
      </div> */}
    </div>
  );
}

export default Address;
