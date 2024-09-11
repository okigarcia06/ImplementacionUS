  // Paso 3: Ingresar datos de entrega (Básicamente lo mismo que el paso 2, validando que la fecha de retiro sea mayor o igual a la fecha seleccionada en el retiro y validar que el domicilio de retiro no sea igual al de entrega).

  import React, { useState, useEffect } from "react";
  import AddressForm from "./AddressForm";
  import { Input } from "@nextui-org/react";
  
  const Step3 = ({ pickupAddress, pickupDate }) => {
    const [deliveryAddress, setDeliveryAddress] = useState({});
    const [deliveryDate, setDeliveryDate] = useState("");
    const [error, setError] = useState("");
  
    useEffect(() => {
      validateAddress();
    }, [deliveryAddress, pickupAddress]);
  
    const validateDate = (date) => {
      return new Date(date) >= new Date(pickupDate);
    };
  
    const validateAddress = () => {
      if (pickupAddress && deliveryAddress) {
        if (pickupAddress.streetName === deliveryAddress.streetName &&
          pickupAddress.streetNumber === deliveryAddress.streetNumber &&
          pickupAddress.locality === deliveryAddress.locality &&
          pickupAddress.province === deliveryAddress.province) {
          setError("El domicilio de entrega no puede ser el mismo que el de retiro.");
        } else {
          setError("");
        }
      }
    };
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Datos de Entrega</h2>
        <AddressForm
          title="Datos de Entrega"
          onAddressChange={(address) => setDeliveryAddress(address)}
        />
        
        {/* Campo para la fecha de entrega */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-primary mb-1 block">
            Fecha de Entrega
          </label>
          <Input
            type="date"
            value={deliveryDate}
            onChange={(e) => {
              setDeliveryDate(e.target.value);
            }}
            className="w-full bg-default-100 data-[hover=true]:bg-default-200 rounded-medium shadow-sm"
          />
          {deliveryDate && !validateDate(deliveryDate) && (
            <p className="text-red-500 mt-2">La fecha de entrega debe ser igual o posterior a la fecha de retiro.</p>
          )}
        </div>
        
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  };
  
  export default Step3;
  
  
  

  
