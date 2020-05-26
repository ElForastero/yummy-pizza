import React, { HTMLAttributes } from 'react';
import c from 'classcat';
import s from './Card.module.css';

type Props = HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<Props> = ({ children, className, ...props }) => (
  <article className={c([s.root, className])} {...props}>
    {children}
  </article>
);
