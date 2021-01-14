import { useTip } from '/scripts/tips/TipDataProvider.js'
import { tip } from "/scripts/tips/Tip.js"


let tipContainer = document.querySelector("#tip-container");

export function TipList() {
  const allTheTips = useTip();

  let tipListHTMLString = "";

  for (const currentTipInLoop of allTheTips) {
    console.log(currentTipInLoop);
    tipListHTMLString += tip(currentTipInLoop);
  }


//   console.log(tipListHTMLString);

  tipContainer.innerHTML = `<h2>Tips</h2>${tipListHTMLString}`;
}