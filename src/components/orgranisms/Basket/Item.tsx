import React, { HTMLAttributes, useState } from 'react';
import {
  Price,
  Scalars,
  Size,
  useRemoveFromCartMutation,
  useAddToCartMutation,
} from 'src/api/graphql';
import { Currencies, DEFAULT_PRODUCT_COVER } from 'src/config';
import { formatPrice } from 'src/utils/price';
import { Counter } from 'src/components/molecules/Counter';
import { Control } from 'src/components/atoms/Control';
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash.svg';
import s from './Item.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  id: Scalars['ID'];
  productId: Scalars['ID'];
  cover: Maybe<string>;
  title: string;
  description: string;
  prices: Array<Price>;
  size: Size;
  count: number;
};

export const Item: React.FC<Props> = ({
  id,
  productId,
  cover,
  title,
  description,
  prices,
  size,
  count,
}) => {
  const [addToCart] = useAddToCartMutation();
  const [mutate] = useRemoveFromCartMutation({ variables: { id } });
  const [countValue, setCount] = useState(count);
  const { EUR, USD } = prices.find(({ size: s }) => s === size)!;
  const totalInEUR = formatPrice(EUR * countValue, Currencies.EUR);
  const totalInUSD = formatPrice(USD * countValue, Currencies.USD);

  const changeAmount = async (value: number) => {
    if (value > 0 && value <= 99) {
      setCount(value);

      await addToCart({
        variables: {
          id: productId,
          size,
          count: value - countValue,
        },
      });
    }
  };

  const removeFromCart = async () => {
    await mutate();
  };

  return (
    <div className={s.root}>
      <img className={s.cover} src={cover ?? DEFAULT_PRODUCT_COVER} alt="" />
      <div className={s.meta}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
      <Counter value={countValue} onChange={changeAmount} />
      <div className={s.price}>
        {totalInEUR}
        <div className={s.subPrice}>{totalInUSD}</div>
      </div>
      <Control onClick={removeFromCart}>
        <TrashIcon width={16} height={16} />
      </Control>
    </div>
  );
};
