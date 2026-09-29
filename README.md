# Ejemplo mínimo: subir una imagen a Cloudinary

Este ejemplo no usa Firebase. Su único objetivo es seleccionar una imagen, subirla y obtener su URL.

## Configuración

1. Crear una cuenta y un proyecto en Cloudinary.
2. Copiar el **Cloud name** que aparece en el panel principal.
3. En **Settings > Upload > Upload presets**, crear un preset con modo **Unsigned**.
4. En `js/app.js`, reemplazar:

```js
const CLOUD_NAME = "REEMPLAZAR_CON_TU_CLOUD_NAME";
const UPLOAD_PRESET = "REEMPLAZAR_CON_TU_UPLOAD_PRESET";
```

5. Abrir `index.html` con Live Server.

Luego de subir la imagen, `resultado.secure_url` contiene la URL que se puede guardar en Firestore:

```js
imagen: urlImagen.value
```

No se debe colocar una API Secret dentro de JavaScript.
