import React from 'react';
import './LocationsCard.css';

function LocationsCard({ aLocation, updateLocation }) {
  return (
    <div className="LocationsCard">
      <div className="LocationsCard-card" onClick={() => updateLocation(aLocation)}>
        <h3>{aLocation.place}</h3>
        <img src={aLocation.image} />
      </div>
    </div>
  );
}

export default LocationsCard;