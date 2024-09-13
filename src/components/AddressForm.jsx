import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input } from "@nextui-org/react";

const AddressForm = ({ title, onAddressChange, initialAddress }) => {
    const [selectedProvince, setSelectedProvince] = useState(initialAddress.province || "");
    const [locality, setLocality] = useState(initialAddress.locality || "");
    const [streetName, setStreetName] = useState(initialAddress.streetName || "");
    const [streetNumber, setStreetNumber] = useState(initialAddress.streetNumber || "");
    const [searchTerm, setSearchTerm] = useState("");
    const [streetNumberError, setStreetNumberError] = useState("");

    const provinces = [
        "Buenos Aires", "Córdoba", "Santa Fe", "Tucumán", "Salta", "Jujuy", "Chubut", "Misiones", "Mendoza", "San Juan",
        "La Rioja", "Catamarca", "Chaco", "Corrientes", "Entre Ríos", "Formosa", "La Pampa", "Neuquén", "Río Negro",
        "San Luis", "Santiago del Estero", "Santa Cruz", "Tierra del Fuego"
    ];

    const filteredProvinces = provinces.filter((province) =>
        province.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelection = (province) => {
        setSelectedProvince(province);
        onAddressChange({ province: province, locality, streetName, streetNumber });
    };

    const handleStreetNumberChange = (value) => {
        // Validar si el número de la calle es un entero
        const isInteger = Number.isInteger(parseInt(value, 10));
        if (value === "" || isInteger) {
            setStreetNumber(value);
            setStreetNumberError("");
            onAddressChange({ province: selectedProvince, locality, streetName, streetNumber: value });
        } else {
            setStreetNumberError("El número de la calle debe ser un número entero.");
        }
    };

    const handleInputChange = (e) => {
        // Solo permite números enteros
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            handleStreetNumberChange(value);
        }
    };

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <div className="mb-4">
                <label className="text-lg font-semibold text-primary mb-1 block">Provincia</label>
                <Dropdown className="w-full">
                    <DropdownTrigger>
                        <Button
                            className="capitalize w-full bg-default-100 data-[hover=true]:bg-default-200 rounded-medium text-left flex justify-start items-center"
                        >
                            {selectedProvince ? selectedProvince : "Seleccione una provincia"}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Seleccione una provincia"
                        selectionMode="single"
                        onSelectionChange={(key) => handleSelection(key)}
                        className="max-h-60 overflow-y-auto"
                    >
                        <DropdownItem key="search" isReadOnly shouldCloseOnSelect={false}>
                            <Input
                                type="text"
                                placeholder="Buscar provincia..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full"
                            />
                        </DropdownItem>
                        {filteredProvinces.map((province) => (
                            <DropdownItem
                                key={province}
                                textValue={province}
                                onClick={() => handleSelection(province)}
                            >
                                {province}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div className="mb-4">
                <label className="text-lg font-semibold text-primary mb-1 block">Localidad</label>
                <Input
                    placeholder="Ingrese la localidad"
                    value={locality}
                    onChange={(e) => {
                        setLocality(e.target.value);
                        onAddressChange({ province: selectedProvince, locality: e.target.value, streetName, streetNumber });
                    }}
                    className="w-full"
                />
            </div>

            <div className="mb-4">
                <label className="text-lg font-semibold text-primary mb-1 block">Nombre de la Calle</label>
                <Input
                    placeholder="Ingrese el nombre de la calle"
                    value={streetName}
                    onChange={(e) => {
                        setStreetName(e.target.value);
                        onAddressChange({ province: selectedProvince, locality, streetName: e.target.value, streetNumber });
                    }}
                    className="w-full"
                />
            </div>

            <div className="mb-4">
                <label className="text-lg font-semibold text-primary mb-1 block">Número de la Calle</label>
                <Input
                    placeholder="Ingrese el número de la calle"
                    value={streetNumber}
                    onChange={handleInputChange}
                    className="w-full"
                />
                {streetNumberError && <p className="text-red-500 mt-2">{streetNumberError}</p>}
            </div>
        </div>
    );
};

export default AddressForm;







