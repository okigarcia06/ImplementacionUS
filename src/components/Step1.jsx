// paso 1: Seleccionar tipo de carga (con algún elemento tipo droplist que liste los tipos de carga y seleccione 1).
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const Step1 = ({ onSelectType }) => {
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    onSelectType(selectedType);
  }, [selectedType, onSelectType]);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-light rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-dark">Tipo de Carga</h2>
      <Dropdown className="w-full">
        <DropdownTrigger>
          <Button
            variant="solid"
            className="w-full bg-default-100 rounded-medium flex justify-start items-center"
          >
            {selectedType || "Seleccione el tipo de carga"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Selección de tipo de carga"
          selectionMode="single"
          onSelectionChange={setSelectedType}
        >
          <DropdownItem key="documentacion">Documentación</DropdownItem>
          <DropdownItem key="paquete">Paquete</DropdownItem>
          <DropdownItem key="granos">Granos</DropdownItem>
          <DropdownItem key="hacienda">Hacienda</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {selectedType && <p className="mt-4 text-sm">Tipo de carga seleccionado: {selectedType}</p>}
    </div>
  );
};

export default Step1;



