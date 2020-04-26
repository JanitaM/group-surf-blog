import React from 'react';

function LocationsDetails({ setIsHomePage, aLocation }) {
  return (
    <main>
      <button onClick={() => setIsHomePage(true)}>Go to home page</button>
      <h2>Details for {aLocation.place}</h2>
      <div className="LocationsCard">
        <h3>{aLocation.place}</h3>
        <img src={aLocation.image} />
        <p>{aLocation.description}</p>
      </div>
    </main>
  );
}

export default LocationsDetails;