import React from "react";
import cls from "./Map2.module.scss";

function Map2() {
  return (
    <div class="mapouter">
      <div className={cls.map}>
        <iframe
          //   width="1092"
          //   height="400"
          //   id="gmap_canvas"
          title="Map"
          src="https://maps.google.com/maps?q=28.67759273966348,%2077.30435149753099&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
}

export default Map2;
