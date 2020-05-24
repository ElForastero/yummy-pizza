import React from 'react';
import s from './Layout.module.css';

export const Layout: React.FC = ({ children }) => {
  return <main className={s.root}>{children}</main>;
};
