import React from 'react';
import { Footer } from 'src/components/molecules/Footer';
import { Layout } from 'src/components/atoms/Layout';

export const Common: React.FC = ({ children }) => (
  <Layout>
    {children}
    <Footer />
  </Layout>
);
