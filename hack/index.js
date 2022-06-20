// A little script to cheat the game
// Run this script with Dev Tools and navigate to ready screen
const yesBtnID = "#yes-btn";
const noBtnID = "#no-btn";
const equationID = "#equation";
const sumID = "#sum";

let interval = setInterval(() => {
  const equationText = document.querySelector(equationID)?.textContent;
  const sumText = document.querySelector(sumID)?.textContent;
  const yesBtn = document.querySelector(yesBtnID);
  const noBtn = document.querySelector(noBtnID);

  if (!equationText || !sumText || !yesBtn || !noBtn) {
    console.error("Can't find equation");
    return;
  }

  // Grab value from text content
  const [firstValue, secondValue] = equationText.split("+");
  const sum = sumText.split("=")[1];

  if (parseInt(firstValue) + parseInt(secondValue) === parseInt(sum)) {
    yesBtn.click();
  } else {
    noBtn.click();
  }
}, 1000);
