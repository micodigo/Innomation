import React from "react";
import cls from "./Map2.module.scss";

function Map2() {
  return (
    <div className={cls.mapouter}>
      <div>
        <iframe
          //   width="1092"
          //   height="400"
          //   id="gmap_canvas"
          className={cls.map}
          title="Map"
          src="https://maps.google.com/maps?q=InnoMation%20Tech%20Services&t=&z=16&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
}

export default Map2;
