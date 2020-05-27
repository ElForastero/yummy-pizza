import React from 'react';
import { Counter } from 'src/components/molecules/Counter';
import { Control } from 'src/components/atoms/Control';
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash.svg';
import s from './Item.module.css';

type Props = {
  cover: string;
  title: string;
  description: string;
  price: number;
  count: number;
};

export const Item: React.FC<Props> = ({
  cover,
  title,
  description,
  count,
  price,
}) => {
  return (
    <div className={s.root}>
      <img className={s.cover} src={cover} alt="" />
      <div className={s.meta}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
      <Counter value={count} onChange={console.log} />
      <div className={s.price}>{price.toFixed(2)} €</div>
      <Control>
        <TrashIcon width={16} height={16} />
      </Control>
    </div>
  );
};
