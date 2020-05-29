import React, { HTMLAttributes } from 'react';
import s from './Input.module.css';

type Props = HTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ ...props }) => (
  <input className={s.root} type="text" {...props} />
);
