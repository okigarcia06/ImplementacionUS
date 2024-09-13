// Paso 2: Ingresar datos de retiro (acá basicamente un form con campos tipo textbox para calle, nro - droplist para provincia y localidad) *Acá deberíamos preguntar que provincias quiere que carguemos y que localidades* y un text área para la referencia. (Tenemos que validar todos los campos obligatorios, y por ej en nro que se ingrese un número, referencia es opcional) Por último un elemento tipo calendar para elegir la fecha de retiro. (validar que sea mayor o igual a hoy básicamente las fechas anteriores a la actual no se pueden seleccionar).
import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import AddressForm from "./AddressForm";

const Step2 = ({ onSelectPickupAddress, onSelectPickupDate, onValidationChange }) => {
  const [pickupAddress, setPickupAddress] = useState({});
  const [pickupDate, setPickupDate] = useState("");
  const [isDateValid, setIsDateValid] = useState(true);

  useEffect(() => {
    const isValid = validateDate(pickupDate) && Object.keys(pickupAddress).length > 0;
    onValidationChange(isValid);
  }, [pickupDate, pickupAddress, onValidationChange]);

  const validateDate = (date) => {
    const today = new Date().toISOString().split("T")[0];
    const isValid = new Date(date) >= new Date(today);
    setIsDateValid(isValid);
    return isValid;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Datos de Retiro</h2>
      <AddressForm
        title="Datos de Retiro"
        onAddressChange={(address) => {
          setPickupAddress(address);
          onSelectPickupAddress(address);
        }}
        initialAddress={pickupAddress}
      />
      <div className="mb-4">
        <label className="text-lg font-semibold text-primary mb-1 block">Fecha de Retiro</label>
        <Input
          type="date"
          value={pickupDate}
          onChange={(e) => {
            const date = e.target.value;
            setPickupDate(date);
            onSelectPickupDate(date);
            validateDate(date);
          }}
          className="w-full bg-default-100 rounded-medium shadow-sm"
        />
        {!isDateValid && pickupDate && (
          <p className="text-red-500 mt-2">La fecha debe ser igual o posterior a la fecha actual.</p>
        )}
      </div>
    </div>
  );
};

export default Step2;









