import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const MapContainer = () => {
  const mapStyles = {
    margin: "3%",
    height: "55vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: 28.6139,
    lng: 77.209,
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
