import React from 'react';
import { DEFAULT_PRODUCT_COVER } from 'src/config';
import { Skeleton } from 'src/components/atoms/Skeleton';
import s from './Item.module.css';

export const ItemSkeleton: React.FC = () => (
  <div className={s.root}>
    <img className={s.cover} src={DEFAULT_PRODUCT_COVER} alt="" />
    <div className={s.meta}>
      <div className={s.title}>
        <Skeleton block line />
      </div>
      <div className={s.description}>
        <Skeleton block line />
      </div>
    </div>
    <div className={s.price}>
      <Skeleton block line />
    </div>
  </div>
);
