import React, { ButtonHTMLAttributes } from 'react';
import c from 'classcat';
import s from './Button.module.css';

type Size = 'sm' | 'md' | 'lg';
type Color = 'primary' | 'secondary';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  color?: Color;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
};

export const Button: React.FC<Props> = ({
  children,
  size = 'md',
  color = 'primary',
  startIcon,
  endIcon,
  className,
  ...props
}) => (
  <button className={c([s.root, s[size], s[color], className])} {...props}>
    {startIcon && (
      <span role="img" className={c([s.icon, s.startIcon])}>
        {startIcon}
      </span>
    )}
    {children}
    {endIcon && (
      <span role="img" className={c([s.icon, s.endIcon])}>
        {endIcon}
      </span>
    )}
  </button>
);
