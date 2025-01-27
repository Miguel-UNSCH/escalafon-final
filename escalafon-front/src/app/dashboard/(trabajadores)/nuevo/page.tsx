'use client'

import React, { useState } from "react";

const steps = [
  { label: "Personal Info", content: "Formulario de información personal" },
  { label: "History", content: "Formulario de historial" },
  { label: "Skills", content: "Formulario de habilidades" },
  { label: "Additional Info", content: "Formulario de información adicional" },
  { label: "Review", content: "Revisión final" },
];

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-5">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        {/* Stepper Header */}
        <div className="flex justify-between mb-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 ${
                currentStep >= index ? "text-blue-500" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  currentStep >= index
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-gray-400"
                }`}
              >
                {index + 1}
              </div>
              <span className="hidden md:inline">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">
            {steps[currentStep].label}
          </h2>
          <p>{steps[currentStep].content}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
