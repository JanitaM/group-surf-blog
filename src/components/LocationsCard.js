import React from "react";
import "./LocationsCard.css";

function LocationsCard({ aLocation, updateLocation }) {
  return (
    <div className="LocationsCard">
      <div
        className="LocationsCard-card"
        onClick={() => updateLocation(aLocation)}
      >
        <img src={aLocation.image} />
        <h3>{aLocation.place}</h3>
      </div>
    </div>
  );
}

export default LocationsCard;
