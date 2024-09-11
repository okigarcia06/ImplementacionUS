import React from "react";

const steps = [
  {
    id: "1",
    title: "Tipo de Carga",
  },
  {
    id: "2",
    title: "Datos de Retiro",
  },
  {
    id: "3",
    title: "Datos de Entrega",
  },
  {
    id: "4",
    title: "Publicar Pedido",
  },
];

const Stepper = ({ currentStep }) => {
  return (
    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
      {steps.map((step, index) => {
        const isCurrentStep = index + 1 === currentStep;
        const liStyles = isCurrentStep
          ? "text-[#0077b6] dark:text-[#00b4d8]"
          : "text-[#03045e] dark:text-[#90e0ef]";
        const spanStyles = isCurrentStep
          ? "border-[#0077b6]"
          : "border-[#03045e]";

        return (
          <li key={index} className={`flex items-center space-x-2.5 ${liStyles}`}>
            <span
              className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${spanStyles}`}
            >
              {step.id}
            </span>
            <span>
              <h3 className="font-bold leading-tight">{step.title}</h3>
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;

