import React from 'react';
import { times } from 'ramda';
import { Content } from 'src/components/atoms/Layout';
import { useProductsQuery } from 'src/api/graphql';
import {
  PizzaCard,
  PizzaCardSkeleton,
} from 'src/components/orgranisms/PizzaCard';
import { Currencies } from 'src/config';
import s from './PizzaScroller.module.css';

const PRODUCTS_PER_PAGE = 8;

export const PizzaScroller: React.FC = () => {
  const { loading, data } = useProductsQuery();

  return (
    <Content className={s.root}>
      {loading && times(i => <PizzaCardSkeleton key={i} />, PRODUCTS_PER_PAGE)}

      {!loading &&
        data?.products?.map(({ id, title, description, prices, cover }) => (
          <PizzaCard
            key={id}
            id={id}
            title={title}
            description={description}
            prices={prices}
            currency={Currencies.EUR}
            cover={cover}
          />
        ))}
    </Content>
  );
};
