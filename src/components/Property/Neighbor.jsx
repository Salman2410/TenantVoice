import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Neighborhood = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "0.5rem",
  };

  const center = {
    lat: 40.71427, // Replace with the latitude of the location
    lng: -74.00597, // Replace with the longitude of the location
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Neighborhood</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker
            position={center}
            label={{
              text: "$1750",
              className: "bg-purple-700 text-white p-1 rounded-full",
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Neighborhood;
