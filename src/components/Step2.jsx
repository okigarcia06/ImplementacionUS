// Paso 2: Ingresar datos de retiro (acá basicamente un form con campos tipo textbox para calle, nro - droplist para provincia y localidad) *Acá deberíamos preguntar que provincias quiere que carguemos y que localidades* y un text área para la referencia. (Tenemos que validar todos los campos obligatorios, y por ej en nro que se ingrese un número, referencia es opcional) Por último un elemento tipo calendar para elegir la fecha de retiro. (validar que sea mayor o igual a hoy básicamente las fechas anteriores a la actual no se pueden seleccionar).
// Step2.jsx
import React, { useState } from "react";
import AddressForm from "./AddressForm";
import { Input } from "@nextui-org/react";

const Step2 = ({ onSelectPickupAddress = () => {}, onSelectPickupDate = () => {} }) => {
  const [pickupAddress, setPickupAddress] = useState({});
  const [pickupDate, setPickupDate] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Datos de Retiro</h2>

      <AddressForm
        title="Datos de Retiro"
        onAddressChange={(address) => {
          setPickupAddress(address);
          onSelectPickupAddress(address);  // Notify parent of pickup address change
        }}
      />

      {/* Campo para la fecha de retiro */}
      <div className="mb-4">
        <label className="text-lg font-semibold text-primary mb-1 block">
          Fecha de Retiro
        </label>
        <Input
          type="date"
          value={pickupDate}
          onChange={(e) => {
            setPickupDate(e.target.value);
            onSelectPickupDate(e.target.value);  // Notify parent of pickup date change
          }}
          className="w-full bg-default-100 data-[hover=true]:bg-default-200 rounded-medium shadow-sm"
        />
      </div>
    </div>
  );
};

export default Step2;





