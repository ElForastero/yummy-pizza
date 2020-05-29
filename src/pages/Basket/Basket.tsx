import React, { Fragment } from 'react';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import { Common as Layout } from 'src/layouts/Common';
import { Content } from 'src/components/atoms/Layout';
import { TopNavigation } from 'src/components/orgranisms/TopNavigation';
import { Basket as BasketContainer } from 'src/components/orgranisms/Basket';
import '@reach/skip-nav/styles.css';

export const Basket: React.FC = () => {
  return (
    <Fragment>
      <SkipNavLink />
      <TopNavigation />
      <Layout>
        <SkipNavContent />
        <Content>
          <BasketContainer />
        </Content>
      </Layout>
    </Fragment>
  );
};
