import * as React from "react";

interface Step {
    name: string;
    component: React.ComponentType;
}

interface StepperProps {
    steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({steps}) => {
    return (
        <div>
            {steps.map((step: Step, index: number) => {
                const StepComponent = step.component;
                return (
                    <div key={index} className="mb-8">
                        <h1 className="text-xl font-bold mb-2">{step.name}</h1>
                        <StepComponent/>
                    </div>
                );
            })}
        </div>
    );
};

export default Stepper;
