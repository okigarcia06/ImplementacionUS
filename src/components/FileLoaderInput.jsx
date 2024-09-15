//Componente de carga de imagenes

import React, { useState, useRef } from "react";
import Swal from "sweetalert2"; // Importar SweetAlert2
import './FileLoaderInput.css'

function FileLoaderInput(props) {
    const fileInputRef = useRef(null);

    const [archivosSeleccionados, setArchivosSeleccionados] = useState([]);
    const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);

    // Función para verificar el tamaño total combinado de todos los archivos
    const verificarTamanioTotal = (archivos) => {
        const archivosArray = Array.from(archivos);
        const tamañoTotal = archivosArray.reduce((total, archivo) => total + archivo.size, 0);
        const tamañoTotalActual = archivosSeleccionados.reduce((total, archivo) => total + archivo.size, 0);

        return tamañoTotal + tamañoTotalActual <= 10 * 1024 * 1024;
    };

    // Función para verificar el número máximo de archivos
    const verificarNumeroMaximo = (archivos) => {
        const archivosArray = Array.from(archivos);
        return archivosSeleccionados.length + archivosArray.length <= 3;
    };

    // Función para verificar el tamaño, tipo y número de los archivos
    const verificarArchivos = (archivos) => {
        const archivosArray = Array.from(archivos);
        const tiposPermitidos = ['image/jpeg', 'image/png'];
        const nuevasImagenes = [];
        let archivosValidos = true;

        // Validar número máximo de imágenes
        if (!verificarNumeroMaximo(archivos)) {
            Swal.fire({
                title: "Límite de archivos excedido",
                text: "No puedes subir más de 3 imágenes.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            archivosValidos = false;
        }

        for (const archivo of archivosArray) {
            if (!tiposPermitidos.includes(archivo.type)) {
                Swal.fire({
                    title: "Tipo de archivo no válido",
                    text: "Solo se permiten imágenes JPG o PNG.",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
                archivosValidos = false;
                break; // Detener la verificación si encontramos un archivo no válido
            }

            nuevasImagenes.push(URL.createObjectURL(archivo));
        }

        // Verificar el tamaño total combinado
        if (archivosValidos && !verificarTamanioTotal(archivosArray)) {
            Swal.fire({
                title: "Tamaño total excedido",
                text: "El tamaño total de todas las imágenes no puede superar los 10MB.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            archivosValidos = false;
        }

        if (archivosValidos) {
            setArchivosSeleccionados((prev) => [...prev, ...archivosArray]);
            setImagenesSeleccionadas((prev) => [...prev, ...nuevasImagenes]);
            props.onFilesSelected([...archivosSeleccionados, ...archivosArray]);
        }

        return archivosValidos;
    };

    const handleFileChange = (e) => {
        const archivos = e.target.files;
        verificarArchivos(archivos);
    };

    const eliminarImagen = (index) => {
        const nuevosArchivos = [...archivosSeleccionados];
        const nuevasImagenes = [...imagenesSeleccionadas];

        nuevosArchivos.splice(index, 1);
        nuevasImagenes.splice(index, 1);

        setArchivosSeleccionados(nuevosArchivos);
        setImagenesSeleccionadas(nuevasImagenes);

        // Llama a props.onFilesSelected con los archivos actualizados
        props.onFilesSelected(nuevosArchivos);
    };

    const limpiarSeleccion = () => {
        setArchivosSeleccionados([]);
        setImagenesSeleccionadas([]);
        fileInputRef.current.value = null;
    };

    return (
        <div className="upload-container mt-4">
            <label htmlFor="file_upload">Buscar localmente o arrastra</label>
            <input
                type="file"
                id="file_upload"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
            />

            {imagenesSeleccionadas.length > 0 && (
                <div>
                    <h1 className="text-2xl font-bold mb-2 mt-2">Tus Imágenes</h1>
                    <div className="image-grid">
                        {imagenesSeleccionadas.map((imagen, index) => (
                            <div
                                key={index}
                                className="image-wrapper"
                            >
                                <img
                                    src={imagen}
                                    alt={`Imagen ${index + 1}`}
                                    className="image"
                                />
                                <span
                                    className="eliminar-imagen"
                                    onClick={() => eliminarImagen(index)}
                                >
                                    X
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FileLoaderInput;

