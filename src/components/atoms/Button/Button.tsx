import React, { ButtonHTMLAttributes } from 'react';
import c from 'classcat';
import s from './Button.module.css';

type Size = 'sm' | 'md' | 'lg';
type Color = 'primary' | 'secondary';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  color?: Color;
};

export const Button: React.FC<Props> = ({
  children,
  size = 'md',
  color = 'primary',
  className,
  ...props
}) => (
  <button className={c([s.root, s[size], s[color], className])} {...props}>
    {children}
  </button>
);
