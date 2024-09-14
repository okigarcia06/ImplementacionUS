// Paso 4: Publicar el pedido (en esta parte básicamente hacemos un inputloader para subir fotos (validar que sea solo en el formato especificado jpg o png, max 3 fotos, no mas de 10mb) y por último un botón de publicar que cuando lo aprieten se envíe la notificación por email y la notificación push. 
import React from "react";
import FileLoaderInput from "./FileLoaderInput";

const Step4 = ({ onFilesSelected }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-dark">Subir Fotos (Opcional)</h1>
            <FileLoaderInput onFilesSelected={onFilesSelected} />
        </div>
    );
};

export default Step4;






