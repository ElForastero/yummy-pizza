import React from 'react';
import { times } from 'ramda';
import { ItemSkeleton } from './ItemSkeleton';
import s from './Basket.module.css';

export const BasketSkeleton: React.FC = () => (
  <div className={s.root}>
    <h3>My Yummy Order 😋</h3>
    <div role="list" className={s.list}>
      {times(
        i => (
          <ItemSkeleton key={i} />
        ),
        3
      )}
    </div>
  </div>
);
