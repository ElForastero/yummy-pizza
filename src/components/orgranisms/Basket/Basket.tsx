import React from 'react';
import { useCartQuery } from 'src/api/graphql';
import { Step, Stepper, useStepper } from 'src/components/molecules/Stepper';
import { EmptyBasket } from './EmptyBasket';
import { BasketSkeleton } from './BasketSkeleton';
import { Step0, Step1 } from './Steps';
import s from './Basket.module.css';

export const Basket: React.FC = () => {
  const { data } = useCartQuery();
  const { step, stepForward, stepBackward } = useStepper();

  if (data === undefined) return <BasketSkeleton />;
  if (data.cart.length === 0) return <EmptyBasket />;

  return (
    <div className={s.root}>
      <Stepper step={step}>
        <Step step={0}>
          <Step0 data={data} stepForward={stepForward} />
        </Step>

        <Step step={1}>
          <Step1 stepForward={stepForward} stepBackward={stepBackward} />
        </Step>

        <Step step={2}>
          <h3>Order was confirmed 👍</h3>
          <p>Your pizza will be delivered in 1 hour 🍕🚀</p>
        </Step>
      </Stepper>
    </div>
  );
};
