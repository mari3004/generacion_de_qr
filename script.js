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
  const canvas = document.createElement("canvas");
  canvasWrap.appendChild(canvas);

  QRCode.toCanvas(
    canvas,
    text,
    {
      width: size,
      margin: 2,
      color: {
        dark: color,
        light: "#ffffff",
      },
    },
    (error) => {
      if (error) {
        console.error(error);
        alert("No se pudo generar el QR. Revisá el link ingresado.");
        return;
      }
      downloadLink.href = canvas.toDataURL("image/png");
      resultBox.hidden = false;
    }
  );
}

// Genera un QR con los valores por defecto al cargar la página.
generateQr();
