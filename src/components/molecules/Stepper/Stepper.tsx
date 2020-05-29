import React, { createContext } from 'react';

export const Context = createContext<number>(0);

type Props = {
  step: number;
};

export const Stepper: React.FC<Props> = ({ step, children }) => (
  <Context.Provider value={step}>{children}</Context.Provider>
);
