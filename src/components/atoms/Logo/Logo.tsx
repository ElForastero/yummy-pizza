import React, { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import s from './Logo.module.css';

type Props = HTMLAttributes<HTMLSpanElement>;

export const Logo: React.FC<Props> = () => (
  <Link to="/" className={s.root} role="img" aria-label="yummy pizza logo">
    🍕<span className={s.yummyFace}>😋</span> Yummy Pizza
  </Link>
);
