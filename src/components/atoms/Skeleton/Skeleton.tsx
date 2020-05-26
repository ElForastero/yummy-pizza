import React from 'react';
import c from 'classcat';
import s from './Skeleton.module.css';

type Props = {
  line?: boolean;
  block?: boolean;
  fluid?: boolean;
  className?: string;
};

export const Skeleton: React.FC<Props> = ({
  line = false,
  block = false,
  fluid = false,
  className = null,
}) => (
  <span
    className={c({
      [s.root]: true,
      ...(className && { [className]: true }),
      [s.line]: line,
      [s.block]: block,
      [s.fluid]: fluid,
    })}
  />
);
