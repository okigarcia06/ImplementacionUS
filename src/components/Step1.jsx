// paso 1: Seleccionar tipo de carga (con algún elemento tipo droplist que liste los tipos de carga y seleccione 1).
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Step1 = () => {
  const [selectedType, setSelectedType] = useState("");
  const handleSelection = (key) => {
    setSelectedType(key);
  };

  return (
    <div className="p-4">
      <label className="text-lg font-semibold text-primary mb-1 block">
        Tipo de Carga
      </label>
      <Dropdown className="w-full">
        <DropdownTrigger>
          <Button
            variant="solid"
            className="capitalize relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 bg-default-100 data-[hover=true]:bg-default-200 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background h-14 py-2"
          >
            {selectedType ? selectedType : "Seleccione el tipo de carga"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Selección de tipo de carga"
          selectionMode="single"
          onSelectionChange={handleSelection}
          className=""
        >
          <DropdownItem key="documentacion">Documentación</DropdownItem>
          <DropdownItem key="paquete">Paquete</DropdownItem>
          <DropdownItem key="granos">Granos</DropdownItem>
          <DropdownItem key="hacienda">Hacienda</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {selectedType && (
        <p className="mt-4 text-sm">
          Tipo de carga seleccionado: {selectedType}
        </p>
      )}
    </div>
  );
};

export default Step1;
