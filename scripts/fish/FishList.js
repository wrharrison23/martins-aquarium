/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from '/scripts/fish/FishDataProvider.js'
import { Fish } from "/scripts/fish/Fish.js"


let fishContainer = document.querySelector("#fish-list");

export function FishList() {
  const allTheFish = useFish();

  let fishListHTMLString = "";

  for (const currentFishInLoop of allTheFish) {
    console.log(currentFishInLoop);
    fishListHTMLString += Fish(currentFishInLoop);
  }


//   console.log(fishListHTMLString);

  fishContainer.innerHTML = `<h2>My Fish</h2>${fishListHTMLString}`;
}
