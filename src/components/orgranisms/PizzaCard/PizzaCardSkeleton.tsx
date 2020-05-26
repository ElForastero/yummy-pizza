import React from 'react';
import { Card } from 'src/components/atoms/Card';
import { Skeleton } from 'src/components/atoms/Skeleton';
import { DEFAULT_PIZZA_COVER } from './PizzaCard';
import s from './PizzaCard.module.css';

export const PizzaCardSkeleton: React.FC = () => (
  <Card>
    <div className={s.coverWrapper}>
      <img className={s.cover} src={DEFAULT_PIZZA_COVER} alt="Yummy Pizza" />
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
