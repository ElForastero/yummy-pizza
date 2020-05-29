import React from 'react';
import s from './Basket.module.css';
import { Link } from 'react-router-dom';

export const EmptyBasket: React.FC = () => (
  <div className={s.root}>
    <h3>
      😲 No pizzas? Try to <Link to="/">add some</Link>
    </h3>
  </div>
);
