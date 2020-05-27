import React from 'react';
import { Button } from 'src/components/atoms/Button';
import { ReactComponent as MinusIcon } from 'src/assets/icons/minus.svg';
import { ReactComponent as PlusIcon } from 'src/assets/icons/plus.svg';
import s from './Counter.module.css';

type Props = {
  value: number;
  onChange(v: number): void;
};

export const Counter: React.FC<Props> = ({ value, onChange }) => (
  <div className={s.root}>
    <Button size="sm" color="secondary" onClick={() => onChange(value - 1)}>
      <MinusIcon width={16} height={16} />
    </Button>
    <div className={s.value}>{value}</div>
    <Button size="sm" color="secondary" onClick={() => onChange(value + 1)}>
      <PlusIcon width={16} height={16} />
    </Button>
  </div>
);
