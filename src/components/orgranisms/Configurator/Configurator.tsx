import React, { useState } from 'react';
import c from 'classcat';
import { Button } from 'src/components/atoms/Button';
import s from './Configurator.module.css';

type Props = {
  cover: Maybe<string>;
};

export const Configurator: React.FC<Props> = ({ cover }) => {
  const [value, setValue] = useState<'S' | 'M' | 'L'>('M');

  return (
    <div className={s.root}>
      <div className={s.cover}>
        <img
          src={cover ?? ''}
          className={c({
            [s.cover]: true,
            [s.s]: value === 'S',
            [s.m]: value === 'M',
            [s.l]: value === 'L',
          })}
          alt=""
        />
      </div>
      <div className={s.info}>
        <div className={s.options}>
          <button
            className={c({ [s.option]: true, [s.active]: value === 'L' })}
            onClick={() => setValue('L')}
          >
            Large - 16'
          </button>
          <button
            className={c({ [s.option]: true, [s.active]: value === 'M' })}
            onClick={() => setValue('M')}
          >
            Medium - 14'
          </button>
          <button
            className={c({ [s.option]: true, [s.active]: value === 'S' })}
            onClick={() => setValue('S')}
          >
            Small - 12'
          </button>
        </div>
        <Button className={s.control}>Add to basket</Button>
      </div>
    </div>
  );
};
