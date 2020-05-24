import React, { HTMLAttributes } from 'react';
import c from 'classcat';
import s from './Content.module.css';

type Props = HTMLAttributes<HTMLDivElement>;

export const Content: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={c([s.root, className])} {...props}>
    {children}
  </div>
);
