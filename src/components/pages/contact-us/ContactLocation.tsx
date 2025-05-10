"use client";
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "450px",
};
const center = {
  lat: 38.4237,
  lng: 27.1428,
};

const ContactUsLocation = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) return <></>;

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
};

export default ContactUsLocation ;
