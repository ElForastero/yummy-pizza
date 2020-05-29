import React, { useEffect, useState } from 'react';
import c from 'classcat';
import { Link } from 'react-router-dom';
import { useCartQuery } from 'src/api/graphql';
import { Content } from 'src/components/atoms/Layout';
import { Logo } from 'src/components/atoms/Logo';
import { Button } from 'src/components/atoms/Button';
import { ReactComponent as BasketIcon } from 'src/assets/icons/shopping-bag.svg';
import s from './TopNavigation.module.css';

export const TopNavigation: React.FC = () => {
  const [sticky, toggleSticky] = useState(false);
  const { data } = useCartQuery();

  useEffect(() => {
    const listener = () => toggleSticky(window.pageYOffset > 0);
    document.addEventListener('scroll', listener, { passive: true });

    return () => document.removeEventListener('scroll', listener);
  }, []);
  return (
    <nav className={c({ [s.root]: true, [s.withShadow]: sticky })}>
      <Content className={s.content}>
        <Logo />
        <span className={s.right}>
          <a href="tel:8 800 232 23 32">8 800 232 23 32</a>
          {data !== undefined && data.cart.length > 0 && (
            <Link className={s.basket} to="/basket">
              <Button
                color="primary"
                startIcon={<BasketIcon width={16} height={16} />}
              >
                My Order | {data.cart.length}
              </Button>
            </Link>
          )}
        </span>
      </Content>
    </nav>
  );
};
