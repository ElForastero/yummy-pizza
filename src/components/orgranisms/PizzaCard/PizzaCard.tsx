import React from 'react';
import { Card } from 'src/components/atoms/Card';
import { Button } from 'src/components/atoms/Button';
import s from './PizzaCard.module.css';

type Props = {
  // Image URL
  cover?: string;
  title: string;
  description: string;
};

const DEFAULT_PIZZA_COVER = 'https://picsum.photos/500/500.webp';

export const PizzaCard: React.FC<Props> = ({ cover, title, description }) => {
  return (
    <Card>
      <img
        className={s.cover}
        src={cover ? cover : DEFAULT_PIZZA_COVER}
        alt={title}
      />
      <div className={s.title}>{title}</div>
      <div className={s.description}>{description}</div>
      <div className={s.meta}>
        <span className={s.price}>800 €</span>
        <Button color="secondary">Yep, this one</Button>
      </div>
    </Card>
  );
};
