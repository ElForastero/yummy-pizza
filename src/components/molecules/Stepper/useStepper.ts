import { useState } from 'react';

export const useStepper = (initial = 0) => {
  const [step, setStep] = useState(initial);

  const stepForward = () => setStep(step + 1);
  const stepBackward = () => setStep(step - 1);

  return { step, setStep, stepForward, stepBackward };
};
