import React, { Fragment, useContext } from 'react';
import { Context } from './Stepper';

type Props = {
  step: number;
};

export const Step: React.FC<Props> = ({ children, step }) => {
  const currentStep = useContext(Context)!;

  if (currentStep !== step) return null;

  return <Fragment>{children}</Fragment>;
};
