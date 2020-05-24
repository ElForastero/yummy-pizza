import React from 'react';
import s from './Common.module.css';

export const Common: React.FC = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};
