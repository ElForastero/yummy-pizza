import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import cc from 'classcat';
import s from './Control.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Control = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cc([s.root, className])}
      {...rest}
    >
      {children}
    </button>
  )
);
