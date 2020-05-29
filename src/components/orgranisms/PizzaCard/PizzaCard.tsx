import React from 'react';
import { Price, Scalars } from 'src/api/graphql';
import { Currencies, DEFAULT_PRODUCT_COVER } from 'src/config';
import { formatPrice, getMinPrice } from 'src/utils/price';
import { useToggle } from 'src/hooks/useToggle';
import { Card } from 'src/components/atoms/Card';
import { Button } from 'src/components/atoms/Button';
import { Dialog } from 'src/components/molecules/Dialog';
import { Configurator } from 'src/components/orgranisms/Configurator';
import s from './PizzaCard.module.css';

type Props = {
  id: Scalars['ID'];
  cover: Maybe<string>;
  title: string;
  description: string;
  prices: Array<Price>;
  currency: Currencies;
};

export const PizzaCard: React.FC<Props> = ({
  id,
  cover,
  title,
  description,
  prices,
  currency,
}) => {
  const { value, on, off } = useToggle(false);
  const price = getMinPrice(prices, currency);

  return (
    <Card className={s.root}>
      <div className={s.coverWrapper}>
        <img
          className={s.cover}
          src={cover ? cover : DEFAULT_PRODUCT_COVER}
          alt={title}
        />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.description}>{description}</div>
      <div className={s.meta}>
        <span className={s.price}>from {formatPrice(price, currency)}</span>
        <Button color="secondary" onClick={on}>
          Yep, this one
        </Button>
      </div>
      <Dialog label={title} isOpen={value} onDismiss={off}>
        <Configurator id={id} cover={cover} prices={prices} onAdded={off} />
        {description}
      </Dialog>
    </Card>
  );
};
