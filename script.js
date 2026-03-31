const genPaletteBtn = document.getElementById("genPalette-btn");
const color = document.querySelector(".color");
const hexCodeElement = document.querySelector(".hex-code");

genPaletteBtn.addEventListener("click", genPalette);

function genPalette() {
  for (let i = 0; i < 5; i++) {
    let hex = getHexCode();
    color.style.backgroundColor = hex;
    hexCodeElement.textContent = hex;
  }
}

function getHexCode() {
  let hex = "#";
  const hexCodes = "0123456789abcdef";

  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * hexCodes.length);
    hex += hexCodes[index];
  }

  return hex;
}
