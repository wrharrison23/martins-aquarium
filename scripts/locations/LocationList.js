import { useLocation } from '/scripts/locations/LocationDataProvider.js'
import { location } from "/scripts/locations/location.js"


let locationContainer = document.querySelector("#location-card-container");

export function LocationList() {
  const allTheLocations = useLocation();

  let locationListHTMLString = "";

  for (const currentLocationInLoop of allTheLocations) {
    console.log(currentLocationInLoop);
    locationListHTMLString += location(currentLocationInLoop);
  }


//   console.log(fishListHTMLString);

  locationContainer.innerHTML = `${locationListHTMLString}`;
}