import React, { useState } from 'react';

const ProgressTrackerComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
  ];

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <div style={{ width: '100%', margin: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: index + 1 === currentStep ? '#3498db' : '',
              color: index + 1 === currentStep ? '#fff' : '',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onClick={() => handleStepClick(index + 1)}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTrackerComponent;