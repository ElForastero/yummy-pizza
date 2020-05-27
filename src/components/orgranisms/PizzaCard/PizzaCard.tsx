import React from 'react';
import { useToggle } from 'src/hooks/useToggle';
import { Card } from 'src/components/atoms/Card';
import { Button } from 'src/components/atoms/Button';
import { Dialog } from 'src/components/molecules/Dialog';
import { Configurator } from 'src/components/orgranisms/Configurator';
import s from './PizzaCard.module.css';

type Props = {
  cover: Maybe<string>;
  title: string;
  description: string;
  price: number;
};

export const DEFAULT_PIZZA_COVER = '/assets/covers/default.svg';

export const PizzaCard: React.FC<Props> = ({
  cover,
  title,
  description,
  price,
}) => {
  const { value, on, off } = useToggle(false);

  return (
    <Card className={s.root}>
      <div className={s.coverWrapper}>
        <img
          className={s.cover}
          src={cover ? cover : DEFAULT_PIZZA_COVER}
          alt={title}
        />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.description}>{description}</div>
      <div className={s.meta}>
        <span className={s.price}>from {price.toFixed(2)} €</span>
        <Button color="secondary" onClick={on}>
          Yep, this one
        </Button>
      </div>
      <Dialog label={title} isOpen={value} onDismiss={off}>
        <Configurator cover={cover} />
        {description}
      </Dialog>
    </Card>
  );
};
