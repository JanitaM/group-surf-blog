import React, { useState } from 'react';
import LocationsCard from '../components/LocationsCard';
import travelBlogDatabase from '../travelBlogDatabase';
import LocationsDetails from './LocationsDetails';

function Home() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [isHomePage, setisHomePage] = useState(true);

  if (!isHomePage) {
    return (
      <div>
        <LocationsDetails setIsHomePage={setisHomePage} currentLocation={currentLocation} />
      </div>
    );
  }

  return (
    <div>
      <LocationsCard />
    </div>
  );

}

export default Home;