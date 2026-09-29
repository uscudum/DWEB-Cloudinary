// Reemplazar por los datos del panel de Cloudinary.
const CLOUD_NAME = "REEMPLAZAR_CON_TU_CLOUD_NAME";
const UPLOAD_PRESET = "REEMPLAZAR_CON_TU_UPLOAD_PRESET";

const formulario = document.querySelector("#formImagen");
const archivoInput = document.querySelector("#archivo");
const mensaje = document.querySelector("#mensaje");
const urlImagen = document.querySelector("#urlImagen");
const vistaPrevia = document.querySelector("#vistaPrevia");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const archivo = archivoInput.files[0];

    if (!archivo) {
        mensaje.textContent = "Seleccioná una imagen.";
        return;
    }

    const datos = new FormData();
    datos.append("file", archivo);
    datos.append("upload_preset", UPLOAD_PRESET);

    mensaje.textContent = "Subiendo imagen...";

    try {
        const respuesta = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: datos
            }
        );

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error(resultado.error?.message || "No fue posible subir la imagen.");
        }

        urlImagen.value = resultado.secure_url;
        vistaPrevia.src = resultado.secure_url;
        vistaPrevia.hidden = false;
        mensaje.textContent = "Imagen subida correctamente.";
    } catch (error) {
        console.error(error);
        mensaje.textContent = error.message;
    }
});
