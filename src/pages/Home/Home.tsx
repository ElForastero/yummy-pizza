import React, { Fragment } from 'react';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import { Common as Layout } from 'src/layouts/Common';
import { TopNavigation } from 'src/components/orgranisms/TopNavigation';
import { PizzaScroller } from 'src/components/orgranisms/PizzaScroller';
import '@reach/skip-nav/styles.css';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <SkipNavLink />
      <TopNavigation />
      <Layout>
        <SkipNavContent>
          <PizzaScroller />
        </SkipNavContent>
      </Layout>
    </Fragment>
  );
};
