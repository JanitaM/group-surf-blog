import React from 'react';
import travelBlogDatabase from '../travelBlogDatabase';

function LocationsDetails({ setCurrentLocation, currentLocation }) {
  return (
    <div className="LocationsCard">
      {travelBlogDatabase.map(locations => (
        <div className="LocationsCard-card">
          <h3>{currentLocation.place}</h3>
          <img src={currentLocation.image} />
          <p>{currentLocation.description}</p>
        </div>
      ))
      }
    </div>
  );
}

export default LocationsDetails;