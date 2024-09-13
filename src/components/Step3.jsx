  // Paso 3: Ingresar datos de entrega (Básicamente lo mismo que el paso 2, validando que la fecha de retiro sea mayor o igual a la fecha seleccionada en el retiro y validar que el domicilio de retiro no sea igual al de entrega).
  import React, { useState, useEffect } from "react";
  import { Input } from "@nextui-org/react";
  import AddressForm from "./AddressForm";
  import Swal from "sweetalert2"; // Importar SweetAlert2
  
  const Step3 = ({ pickupAddress, pickupDate, onSelectDeliveryAddress, onSelectDeliveryDate, onValidationChange }) => {
    const [deliveryAddress, setDeliveryAddress] = useState({});
    const [deliveryDate, setDeliveryDate] = useState("");
    const [isDateValid, setIsDateValid] = useState(false);
    const [isAddressValid, setIsAddressValid] = useState(false);
  
    useEffect(() => {
      const dateIsValid = validateDate(deliveryDate);
      const addressIsValid = validateAddress();
      const isValid = dateIsValid && addressIsValid;
  
      onValidationChange(isValid); // Notificar el estado de la validación al componente padre
    }, [deliveryDate, deliveryAddress, pickupAddress, pickupDate, onValidationChange]);
  
    // Validar la fecha de entrega
    const validateDate = (date) => {
      if (!pickupDate || !date) {
        return false; // Si no hay fecha de retiro o de entrega, no se considera válido
      }
      
      const isValid = new Date(date) >= new Date(pickupDate);
      setIsDateValid(isValid);
      
      if (!isValid) {
        Swal.fire({
          icon: 'error',
          title: 'Fecha inválida',
          text: 'La fecha de entrega debe ser igual o posterior a la fecha de retiro.',
          confirmButtonText: 'Entendido'
        });
      }
  
      return isValid;
    };
  
    // Validar la dirección de entrega
    const validateAddress = () => {
      const isValid = !(
        pickupAddress.streetName === deliveryAddress.streetName &&
        pickupAddress.streetNumber === deliveryAddress.streetNumber &&
        pickupAddress.locality === deliveryAddress.locality &&
        pickupAddress.province === deliveryAddress.province
      );
  
      if (!isValid) {
        Swal.fire({
          icon: 'error',
          title: 'Dirección inválida',
          text: 'El domicilio de entrega no puede ser el mismo que el de retiro.',
          confirmButtonText: 'Entendido'
        });
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
        </div>
      </div>
    );
  };
  
  export default Step3;
  