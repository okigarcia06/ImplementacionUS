

// App.jsx
import React, { useState, useMemo, useCallback } from "react";
import { NextUIProvider, Button, ButtonGroup } from "@nextui-org/react";
import NavBar from "./components/NavBar";
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
        return <Step2 onSelectType={handleTypeSelection}/>;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  }, [currentStep]);

  return (
    <div className="w-screen h-screen bg-background font-serif">
      <NavBar />
      <NextUIProvider>
        <div className="container mx-auto p-10">
          <Stepper currentStep={currentStep} />
          {CurrentForm}
          <ButtonGroup className="mt-5">
            <Button
              className={`${
                isFirstStep ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-dark text-white hover:bg-primary"
              } font-serif`}
              onPress={handleBack}
              isDisabled={isFirstStep}
            >
              Atrás
            </Button>
            <Button
              className={`${
                isLastStep ? "bg-hover text-white" : "bg-primary text-white hover:bg-hover"
              } font-serif`}
              isDisabled={isLastStep}
              onPress={isLastStep ? undefined : handleForward}
            >
              {isLastStep ? "Publicar" : "Siguiente"}
            </Button>
          </ButtonGroup>
        </div>
      </NextUIProvider>
    </div>
  );
};

export default App;




