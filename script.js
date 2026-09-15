const form = document.getElementById("qr-form");
const urlInput = document.getElementById("url-input");
const sizeInput = document.getElementById("size-input");
const colorInput = document.getElementById("color-input");
const resultBox = document.getElementById("qr-result");
const canvasWrap = document.getElementById("qr-canvas-wrap");
const downloadLink = document.getElementById("download-link");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateQr();
});

function generateQr() {
  const text = urlInput.value.trim();
  if (!text) return;

  const size = Number(sizeInput.value);
  const color = colorInput.value;

  canvasWrap.innerHTML = "";

  new QRCode(canvasWrap, {
    text,
    width: size,
    height: size,
    colorDark: color,
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  const canvas = canvasWrap.querySelector("canvas");
  const img = canvasWrap.querySelector("img");
  downloadLink.href = canvas ? canvas.toDataURL("image/png") : img.src;

  resultBox.hidden = false;
}

// Genera un QR con los valores por defecto al cargar la página.
generateQr();
