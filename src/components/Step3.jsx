  // Paso 3: Ingresar datos de entrega (Básicamente lo mismo que el paso 2, validando que la fecha de retiro sea mayor o igual a la fecha seleccionada en el retiro y validar que el domicilio de retiro no sea igual al de entrega).
  import React, { useState, useEffect } from "react";
  import { Input } from "@nextui-org/react";
  import AddressForm from "./AddressForm";
  
  const Step3 = ({ pickupAddress, pickupDate, onSelectDeliveryAddress, onSelectDeliveryDate, onValidationChange }) => {
    const [deliveryAddress, setDeliveryAddress] = useState({});
    const [deliveryDate, setDeliveryDate] = useState("");
    const [isDateValid, setIsDateValid] = useState(false);
    const [isAddressValid, setIsAddressValid] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const dateIsValid = validateDate(deliveryDate);
      const addressIsValid = validateAddress();
      const isValid = dateIsValid && addressIsValid;
  
      onValidationChange(isValid); // Notificar el estado de la validación al componente padre
    }, [deliveryDate, deliveryAddress, pickupAddress, pickupDate, onValidationChange]);
  
    const validateDate = (date) => {
      if (!pickupDate || !date) return false; // Si no hay fecha de retiro o de entrega, mostrar error
      const isValid = new Date(date) >= new Date(pickupDate);
      setIsDateValid(isValid);
      return isValid;
    };
  
    const validateAddress = () => {
      // Verificar si el domicilio de entrega es diferente al de retiro
      const isValid = !(
        pickupAddress.streetName === deliveryAddress.streetName &&
        pickupAddress.streetNumber === deliveryAddress.streetNumber &&
        pickupAddress.locality === deliveryAddress.locality &&
        pickupAddress.province === deliveryAddress.province
      );
  
      if (!isValid) {
        setError("El domicilio de entrega no puede ser el mismo que el de retiro.");
      } else {
        setError("");
      }
      setIsAddressValid(isValid);
      return isValid;
    };
  
    const handleDateChange = (e) => {
      setDeliveryDate(e.target.value);
    };
  
    const handleAddressChange = (address) => {
      setDeliveryAddress(address);
      onSelectDeliveryAddress(address);
    };
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Datos de Entrega</h2>
  
        <AddressForm
          title="Datos de Entrega"
          onAddressChange={handleAddressChange}
          initialAddress={deliveryAddress}
        />
  
        <div className="mb-4">
          <label className="text-lg font-semibold text-primary mb-1 block">
            Fecha de Entrega
          </label>
          <Input
            type="date"
            value={deliveryDate}
            onChange={handleDateChange}
            className="w-full"
          />
          {!isDateValid && deliveryDate && (
            <p className="text-red-500 mt-2">La fecha de entrega debe ser igual o posterior a la fecha de retiro.</p>
          )}
        </div>
  
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  };
  
  export default Step3;