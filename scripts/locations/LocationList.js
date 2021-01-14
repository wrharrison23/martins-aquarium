import { useLocation } from '/scripts/locations/LocationDataProvider.js'
import { location } from "/scripts/locations/location.js"


let locationContainer = document.querySelector("#location-container");

export function LocationList() {
  const allTheLocations = useLocation();

  let locationListHTMLString = "";

  for (const currentLocationInLoop of allTheLocations) {
    console.log(currentLocationInLoop);
    locationListHTMLString += location(currentLocationInLoop);
  }


//   console.log(fishListHTMLString);

  locationContainer.innerHTML = `<h2>Places I've Been</h2>${locationListHTMLString}`;
}