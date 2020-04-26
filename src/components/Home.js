import React, { useState } from 'react';
import LocationsCard from '../components/LocationsCard';
import travelBlogDatabase from '../travelBlogDatabase';
import LocationsDetails from './LocationsDetails';

function Home() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [isHomePage, setIsHomePage] = useState(true);

  function updateLocation(details) {
    setCurrentLocation(details);
    setIsHomePage(false);
  }

  if (!isHomePage) {
    return (
      <div>
        <LocationsDetails
          setIsHomePage={setIsHomePage}
          aLocation={currentLocation}
        />
      </div>
    );
  }

  return (
    <div>
      {travelBlogDatabase.map(aLocation =>
        <LocationsCard
          aLocation={aLocation}
          key={aLocation.id}
          updateLocation={updateLocation}
        />
      )}
    </div>
  );
}

export default Home;