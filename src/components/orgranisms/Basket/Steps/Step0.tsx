import React, { Fragment } from 'react';
import { CartQueryResult } from 'src/api/graphql';
import { formatPrice, getDeliveryCost } from 'src/utils/price';
import { Currencies } from 'src/config';
import { Button } from 'src/components/atoms/Button';
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-right.svg';
import { Item } from '../Item';
import s from '../Basket.module.css';

type Props = {
  data: CartQueryResult['data'];
  stepForward(): void;
};

export const Step0: React.FC<Props> = ({ data, stepForward }) => {
  const total = data!.cart.reduce(
    (acc, item) => ({
      EUR:
        acc.EUR +
        item.product.prices.find(({ size }) => size === item.size)!.EUR *
          item.count,
      USD:
        acc.USD +
        item.product.prices.find(({ size }) => size === item.size)!.USD *
          item.count,
    }),
    { EUR: 0, USD: 0 }
  );

  const delivery = {
    EUR: getDeliveryCost(total.EUR, Currencies.EUR),
    USD: getDeliveryCost(total.USD, Currencies.USD),
  };

  return (
    <Fragment>
      <h3>My Yummy Order 😋</h3>
      <div role="list" className={s.list}>
        {data!.cart.map(({ id, product, count, size }) => (
          <Item
            role="list-item"
            key={id}
            id={id}
            productId={product.id}
            cover={product.cover}
            title={product.title}
            description={`Size: ${size}`}
            prices={product.prices}
            size={size}
            count={count}
          />
        ))}
      </div>
      <div className={s.actions}>
        <span className={s.total}>
          <span>
            Delivery: {formatPrice(delivery.EUR, Currencies.EUR)}&nbsp;
            <small>({formatPrice(delivery.USD, Currencies.USD)})</small>
          </span>
          <br />
          <span>
            Total: {formatPrice(total.EUR + delivery.EUR, Currencies.EUR)}
            &nbsp;
            <small>
              ({formatPrice(total.USD + delivery.USD, Currencies.USD)})
            </small>
          </span>
        </span>
        <Button
          className={s.rightAction}
          endIcon={<ArrowRightIcon width={16} height={16} />}
          onClick={stepForward}
        >
          Continue
        </Button>
      </div>
    </Fragment>
  );
};
