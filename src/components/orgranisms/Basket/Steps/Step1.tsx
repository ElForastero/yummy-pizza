import React, { Fragment } from 'react';
import { AddressForm } from 'src/components/orgranisms/AddressForm';
import { Button } from 'src/components/atoms/Button';
import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow-left.svg';
import { ReactComponent as BasketIcon } from 'src/assets/icons/shopping-cart.svg';
import s from '../Basket.module.css';

type Props = {
  stepForward(): void;
  stepBackward(): void;
};

export const Step1: React.FC<Props> = ({ stepForward, stepBackward }) => (
  <Fragment>
    <h3>Where to deliver your pizza? 🚀</h3>
    <AddressForm />
    <div className={s.actions}>
      <Button
        color="secondary"
        startIcon={<ArrowLeftIcon width={16} height={16} />}
        onClick={stepBackward}
      >
        Go back
      </Button>
      <Button
        endIcon={<BasketIcon width={16} height={16} />}
        onClick={stepForward}
      >
        Confirm the order
      </Button>
    </div>
  </Fragment>
);
