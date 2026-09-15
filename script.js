const form = document.getElementById("qr-form");
const urlInput = document.getElementById("url-input");
const sizeInput = document.getElementById("size-input");
const colorInput = document.getElementById("color-input");
const resultBox = document.getElementById("qr-result");
const canvasWrap = document.getElementById("qr-canvas-wrap");
const downloadLink = document.getElementById("download-link");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateQr();
});

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.hidden = false;
  resultBox.hidden = true;
}

function clearError() {
  errorMsg.hidden = true;
  errorMsg.textContent = "";
}

function generateQr() {
  const text = urlInput.value.trim();
  if (!text) return;

  if (typeof QRCode === "undefined") {
    showError(
      "No se pudo cargar la librería para generar el QR. Revisá tu conexión a internet o si un bloqueador de contenido está frenando el script."
    );
    return;
  }

  try {
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

    clearError();
    resultBox.hidden = false;
  } catch (error) {
    console.error(error);
    showError("No se pudo generar el QR: " + error.message);
  }
}

// Genera un QR con los valores por defecto al cargar la página.
generateQr();
