import React from 'react';
import { Item } from './Item';
import s from './Basket.module.css';

export const Basket: React.FC = () => {
  return (
    <div className={s.root}>
      <h3>My Order</h3>
      <Item
        cover="/assets/covers/1.jpg"
        title="Peperoni"
        description="Traditional 14'"
        price={14}
        count={1}
      />
      <Item
        cover="/assets/covers/2.jpg"
        title="Vegan Pizza"
        description="Traditional 14'"
        price={14}
        count={1}
      />
      <Item
        cover="/assets/covers/1.jpg"
        title="Peperoni"
        description="Traditional 14'"
        price={9}
        count={3}
      />
      <Item
        cover="/assets/covers/1.jpg"
        title="Peperoni"
        description="Traditional 14'"
        price={14}
        count={1}
      />
    </div>
  );
};
