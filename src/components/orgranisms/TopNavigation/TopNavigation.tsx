import React, { useState, useEffect } from 'react';
import { Content } from 'src/components/atoms/Layout';
import { Logo } from 'src/components/atoms/Logo';
import { Button } from 'src/components/atoms/Button';
import c from 'classcat';
import s from './TopNavigation.module.css';

export const TopNavigation: React.FC = () => {
  const [sticky, toggleSticky] = useState(false);

  useEffect(() => {
    const listener = () => toggleSticky(window.pageYOffset > 0);

    document.addEventListener('scroll', listener, { passive: true });

    return () => document.removeEventListener('scroll', listener);
  }, []);

  return (
    <nav className={c({ [s.root]: true, [s.withShadow]: sticky })}>
      <Content className={s.content}>
        <Logo />
        <span className={s.middle}>
          <a href="/">8 800 232 23 32</a>
          <a href="/">Delivery</a>
        </span>
        <span>
          <Button color="primary">My Order</Button>
        </span>
      </Content>
    </nav>
  );
};
