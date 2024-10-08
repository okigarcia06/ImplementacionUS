// Componente padre
import React, { useState, useMemo, useCallback } from "react";
import { NextUIProvider, Button, ButtonGroup } from "@nextui-org/react";
import NavBar from "./components/NavBar";
import Stepper from "./components/Stepper";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Swal from "sweetalert2";

const App = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedType, setSelectedType] = useState("");
    const [pickupAddress, setPickupAddress] = useState({});
    const [pickupDate, setPickupDate] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState({});
    const [deliveryDate, setDeliveryDate] = useState("");
    const [isStep2Valid, setIsStep2Valid] = useState(false);
    const [isStep3Valid, setIsStep3Valid] = useState(false);

    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === 4;

    const handleBack = useCallback(() => {
        setCurrentStep((prev) => prev - 1);
    }, []);

    const handleForward = useCallback(() => {
        if (currentStep === 1 && !selectedType) return; // Deshabilitar avance si no se selecciona un tipo
        if (currentStep === 2 && !isStep2Valid) return; // Validaciones del paso 2
        if (currentStep === 3 && !isStep3Valid) return; // Validaciones del paso 3
        if (currentStep === 4) {
            sendNotification(); // Mostrar mensaje de éxito
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    }, [currentStep, selectedType, isStep2Valid, isStep3Valid]);

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };

    const handleValidationChange = (step, isValid) => {
        if (step === 2) {
            setIsStep2Valid(isValid);
        } else if (step === 3) {
            setIsStep3Valid(isValid);
        }
    };

    const handleFilesSelected = (files) => {
        // Manejar archivos seleccionados
        console.log(files);
    };

    const sendNotification = () => {
        Swal.fire({
            title: "Notificaciones Enviadas",
            text: "Tus notificaciones han sido enviadas exitosamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
    };

    const CurrentForm = useMemo(() => {
        switch (currentStep) {
            case 1:
                return <Step1 onSelectType={handleTypeSelection} />;
            case 2:
                return (
                    <Step2
                        onSelectPickupAddress={setPickupAddress}
                        onSelectPickupDate={setPickupDate}
                        onValidationChange={(isValid) => handleValidationChange(2, isValid)}
                    />
                );
            case 3:
                return (
                    <Step3
                        pickupAddress={pickupAddress}
                        pickupDate={pickupDate}
                        onSelectDeliveryAddress={setDeliveryAddress}
                        onSelectDeliveryDate={setDeliveryDate}
                        onValidationChange={(isValid) => handleValidationChange(3, isValid)}
                    />
                );
            case 4:
                return <Step4 onFilesSelected={handleFilesSelected} />;
            default:
                return null;
        }
    }, [currentStep, pickupAddress, pickupDate, deliveryAddress, deliveryDate]);

    return (
        <div className="w-screen h-screen bg-background font-serif flex flex-col overflow-x-hidden">
            <NavBar />
            <div className="flex flex-col flex-grow container mx-auto p-10">
                <Stepper currentStep={currentStep} />
                <div className="flex-grow">
                    {CurrentForm}
                </div>
                <div className="pt-4">
                    <ButtonGroup className="w-full flex justify-between">
                        <Button
                            className={`${
                                isFirstStep ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-dark text-white hover:bg-primary"
                            } font-serif rounded-md`}
                            onPress={handleBack}
                            isDisabled={isFirstStep}
                        >
                            Atrás
                        </Button>
                        <Button
                            className={`${
                                isLastStep ? "bg-primary text-white hover:bg-hover" : 
                                (isFirstStep && !selectedType) ? "bg-gray-300 text-gray-500 cursor-not-allowed" : 
                                "bg-primary text-white hover:bg-hover"
                            } font-serif rounded-md` }
                            isDisabled={isFirstStep && !selectedType || (currentStep === 2 && !isStep2Valid) || (currentStep === 3 && !isStep3Valid)}
                            onPress={handleForward}
                        >
                            {isLastStep ? "Publicar" : "Siguiente"}
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
};

export default App;





















