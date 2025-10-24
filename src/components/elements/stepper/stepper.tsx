import * as React from "react";
import { useState } from "react";

interface Step {
    name: string;
    component: React.ComponentType;
}

interface StepperProps {
    steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const CurrentStepComponent = steps[currentStep].component;

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className="flex items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                                    index <= currentStep ? "bg-blue-500 text-white" : "bg-gray-300"
                                }`}
                            >
                                {index + 1}
                            </div>
                            <p className={`ml-2 transition-colors duration-300 ${index <= currentStep ? "text-blue-500" : "text-gray-500"}`}>
                                {step.name}
                            </p>
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`flex-1 h-1 mx-2 transition-colors duration-300 ${
                                    index < currentStep ? "bg-blue-500" : "bg-gray-300"
                                }`}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="mb-8">
                <CurrentStepComponent />
            </div>
            <div className="flex justify-between">
                <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentStep === steps.length - 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Stepper;
