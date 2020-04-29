import React from 'react';
import './LocationsDetails.css';

function LocationsDetails({ setIsHomePage, aLocation }) {
  return (
    <main className="LocationsDetails">
      <div className="LocationsDetails-card">
        <img src={aLocation.image} />
        <div className="LocationsDetails-content">
          <h3>{aLocation.place}</h3>
          <p>{aLocation.description}</p>
        </div>
      </div>

      <button onClick={() => setIsHomePage(true)}>Go to home page</button>
    </main>
  );
}

export default LocationsDetails;