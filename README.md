# Generador de QR

Página estática que genera códigos QR apuntando a un link, todo en el navegador (sin backend).

## Uso local

Abrí `index.html` en el navegador, o serví la carpeta con cualquier servidor estático:

```bash
python -m http.server 8000
```

Y entrá a `http://localhost:8000`.

## Publicar en GitHub Pages

1. Subí este proyecto a un repositorio de GitHub:

   ```bash
   git init
   git add .
   git commit -m "Generador de QR"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git push -u origin main
   ```

2. En GitHub, andá a **Settings → Pages**.
3. En **Source**, elegí la rama `main` y la carpeta `/ (root)`.
4. Guardá. En unos minutos el sitio queda disponible en:

   `https://<tu-usuario>.github.io/<tu-repo>/`

## Cómo funciona

- `index.html`: formulario con el link, tamaño y color del QR.
- `script.js`: usa la librería [`qrcode`](https://github.com/soldair/node-qrcode) (cargada desde CDN) para dibujar el QR en un `<canvas>` y generar la descarga en PNG.
- `style.css`: estilos de la página.

Todo se genera en el navegador del usuario, así que funciona perfectamente en GitHub Pages sin necesidad de backend.
