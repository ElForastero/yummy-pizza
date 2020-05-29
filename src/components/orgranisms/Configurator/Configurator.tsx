import React, { useState } from 'react';
import c from 'classcat';
import { Price, Scalars, Size, useAddToCartMutation } from 'src/api/graphql';
import { Currencies } from 'src/config';
import { formatPrice } from 'src/utils/price';
import { Button } from 'src/components/atoms/Button';
import { ReactComponent as BasketIcon } from 'src/assets/icons/shopping-bag.svg';
import s from './Configurator.module.css';

type Props = {
  id: Scalars['ID'];
  cover: Maybe<string>;
  prices: Array<Price>;
  onAdded(): void;
};

export const Configurator: React.FC<Props> = ({
  id,
  cover,
  prices,
  onAdded,
}) => {
  const [mutate] = useAddToCartMutation();
  const [value, setValue] = useState<Size>(Size.M);
  const { EUR } = prices.find(({ size }) => size === value)!;
  const formattedPrice = formatPrice(EUR, Currencies.EUR);

  const addToCart = async () => {
    await mutate({
      variables: {
        id,
        size: value,
        count: 1,
      },
    });
    onAdded();
  };

  return (
    <div className={s.root}>
      <div className={s.cover}>
        <img
          src={cover ?? ''}
          className={c({
            [s.cover]: true,
            [s.s]: value === Size.S,
            [s.m]: value === Size.M,
            [s.l]: value === Size.L,
          })}
          alt=""
        />
      </div>
      <div className={s.info}>
        <div className={s.options}>
          <button
            className={c({ [s.option]: true, [s.active]: value === Size.L })}
            onClick={() => setValue(Size.L)}
          >
            Large - 35cm
          </button>
          <button
            className={c({ [s.option]: true, [s.active]: value === Size.M })}
            onClick={() => setValue(Size.M)}
          >
            Medium - 30cm
          </button>
          <button
            className={c({ [s.option]: true, [s.active]: value === Size.S })}
            onClick={() => setValue(Size.S)}
          >
            Small - 25cm
          </button>
        </div>
        <Button
          className={s.control}
          startIcon={<BasketIcon width={16} height={16} />}
          onClick={addToCart}
        >
          {formattedPrice}
        </Button>
      </div>
    </div>
  );
};
