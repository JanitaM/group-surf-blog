import React from 'react';
import travelBlogDatabase from '../travelBlogDatabase';
import './LocationsCard.css';

function LocationsCard() {
  return (
    <div className="LocationsCard">
      {travelBlogDatabase.map(locations => (
        <>
          <div className="LocationsCard-card">
            <h3>{locations.place}</h3>
            <img src={locations.image} />
            <p>{locations.description}</p>
          </div>
          <button>Visit</button>
        </>
      ))
      }
    </div>
  );
}

export default LocationsCard;