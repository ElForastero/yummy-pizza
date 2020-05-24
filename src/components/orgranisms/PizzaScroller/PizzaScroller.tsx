import React from 'react';
import { Content } from 'src/components/atoms/Layout';
import { times } from 'ramda';
import { PizzaCard } from 'src/components/orgranisms/PizzaCard';
import s from './PizzaScroller.module.css';

export const PizzaScroller: React.FC = () => (
  <Content className={s.root}>
    {times(
      i => (
        <PizzaCard
          key={i}
          cover={`/assets/covers/${++i}.jpg`}
          title="My Yummy Pizza"
          description="Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус"
        />
      ),
      8
    )}
  </Content>
);
