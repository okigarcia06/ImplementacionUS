  // paso 1: Seleccionar tipo de carga (con algún elemento tipo droplist que liste los tipos de carga y seleccione 1). 
  // Paso 2: Ingresar datos de retiro (acá basicamente un form con campos tipo textbox para calle, nro - droplist para provincia y localidad) *Acá deberíamos preguntar que provincias quiere que carguemos y que localidades* y un text área para la referencia. (Tenemos que validar todos los campos obligatorios, y por ej en nro que se ingrese un número, referencia es opcional) Por último un elemento tipo calendar para elegir la fecha de retiro. (validar que sea mayor o igual a hoy básicamente las fechas anteriores a la actual no se pueden seleccionar).
  // Paso 3: Ingresar datos de entrega (Básicamente lo mismo que el paso 2, validando que la fecha de retiro sea mayor o igual a la fecha seleccionada en el retiro y validar que el domicilio de retiro no sea igual al de entrega).
  // Paso 4: Publicar el pedido (en esta parte básicamente hacemos un inputloader para subir fotos (validar que sea solo en el formato especificado jpg o png, max 3 fotos, no mas de 10mb) y por último un botón de publicar que cuando lo aprieten se envíe la notificación por email y la notificación push. 

// App.jsx
import React, { useState, useMemo, useCallback } from "react";
import { NextUIProvider, Button, ButtonGroup } from "@nextui-org/react";

import Stepper from "./components/Stepper";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 4;

  const handleBack = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  const handleForward = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const CurrentForm = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <Step1 onSelectType={handleTypeSelection} />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  }, [currentStep]);

  return (
    <NextUIProvider>
      <div className="container mx-auto p-10">
        <Stepper currentStep={currentStep} />
        {CurrentForm}
        <ButtonGroup>
          <Button color="default" onPress={handleBack} isDisabled={isFirstStep}>
            {"Atrás"}
          </Button>
          <Button
            color={isLastStep ? "danger" : "primary"}
            onPress={isLastStep ? undefined : handleForward}
            isDisabled={isFirstStep && !selectedType}
          >
            {isLastStep ? "Publicar" : "Siguiente"}
          </Button>
        </ButtonGroup>
      </div>
    </NextUIProvider>
  );
};

export default App;

  
