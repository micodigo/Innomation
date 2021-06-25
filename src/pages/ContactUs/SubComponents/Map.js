import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const MapContainer = () => {
  const mapStyles = {
    // margin: "3%",
    height: "60vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: 28.6139,
    lng: 77.1809,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBrONsw77o5YQyhzHyjTk1V6YOyq4UVhL0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};
export default MapContainer;


{/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=28.66759273966348,%2077.30435149753099&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org">pirate bay</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embed google maps website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div> */}