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
    <div className="flex justify-center items-center min-h-[80px] px-4">
      <ol className="flex flex-wrap items-center space-x-4 sm:space-x-8">
        {steps.map((step, index) => {
          const isCurrentStep = index + 1 === currentStep;
          const liStyles = isCurrentStep
            ? "text-[#0077b6] dark:text-[#00b4d8]"
            : "text-[#03045e] dark:text-[#90e0ef]";
          const spanStyles = isCurrentStep
            ? "border-[#0077b6]"
            : "border-[#03045e]";

          return (
            <li key={index} className={`flex flex-col items-center space-y-1 ${liStyles}`}>
              <span
                className={`flex items-center justify-center w-8 h-8 border rounded-full ${spanStyles}`}
              >
                {step.id}
              </span>
              <span className="text-center">
                <h3 className="font-bold text-sm sm:text-base leading-tight">{step.title}</h3>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Stepper;

