const genPaletteBtn = document.getElementById("genPalette-btn");
const colorBoxes = document.querySelectorAll(".color-box");

genPaletteBtn.addEventListener("click", genPalette);

function genPalette() {
  colorBoxes.forEach((element) => {
    let colorBox = element.querySelector(".color");
    let hex = element.querySelector(".hex-code");

    let hexCodes = getHexCode();

    colorBox.style.backgroundColor = hexCodes;
    hex.textContent = hexCodes;

    element.addEventListener("click", copyHexCode);
  });
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

function copyHexCode(event) {
  const element = event.target;
  if (element.classList.contains("color")) {
    const hexText =
      element.nextElementSibling.querySelector(".hex-code").textContent;

    navigator.clipboard.writeText(hexText);

    const copyBtn = element.nextElementSibling.querySelector(".copy-btn");

    copyBtn.classList.remove("fa-solid", "fa-clone");
    copyBtn.classList.add("fa-regular", "fa-circle-check");

    copyBtn.style.color = "#B2FFA8";

    setTimeout(() => {
      copyBtn.classList.remove("fa-regular", "fa-circle-check");
      copyBtn.classList.add("fa-solid", "fa-clone");

      copyBtn.style.color = "";
    }, 1500);
  } else if (element.classList.contains("copy-btn")) {
    const hexText = element.previousElementSibling.textContent;

    navigator.clipboard.writeText(hexText);
    const copyBtn = element;

    copyBtn.classList.remove("fa-solid", "fa-clone");
    copyBtn.classList.add("fa-regular", "fa-circle-check");

    copyBtn.style.color = "#B2FFA8";

    setTimeout(() => {
      copyBtn.classList.remove("fa-regular", "fa-circle-check");
      copyBtn.classList.add("fa-solid", "fa-clone");

      copyBtn.style.color = "";
    }, 1500);
  }
}

genPalette();
