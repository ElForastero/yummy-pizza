import React, { HTMLAttributes } from 'react';
import s from './Card.module.css';

type Props = HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<Props> = ({ children, ...props }) => (
  <article className={s.root} {...props}>
    {children}
  </article>
);
