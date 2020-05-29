import React from 'react';
import { DEFAULT_PRODUCT_COVER } from 'src/config';
import { Card } from 'src/components/atoms/Card';
import { Skeleton } from 'src/components/atoms/Skeleton';
import s from './PizzaCard.module.css';

export const PizzaCardSkeleton: React.FC = () => (
  <Card>
    <div className={s.coverWrapper}>
      <img className={s.cover} src={DEFAULT_PRODUCT_COVER} alt="Yummy Pizza" />
    </div>
    <div className={s.title}>
      <Skeleton block line />
    </div>
    <div className={s.description}>
      <Skeleton block line fluid />
      <Skeleton block line fluid />
      <Skeleton block line />
    </div>
    <div className={s.meta}>
      <span className={s.price}>
        <Skeleton block line />
      </span>
    </div>
  </Card>
);
