import React from 'react';
import { Content } from 'src/components/atoms/Layout';
import s from './Footer.module.css';

export const Footer: React.FC = () => (
  <footer>
    <Content className={s.root}>
      © Yummy Pizza {new Date().getFullYear()}
    </Content>
  </footer>
);
