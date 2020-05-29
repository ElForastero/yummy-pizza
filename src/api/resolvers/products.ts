import { CustomResolver } from '@apollo/client';
import { simulateDelay } from 'src/api/utils/simulateDelay';
import { PRODUCTS } from './mock';

/**
 * @todo This should be on backend
 */
const products: CustomResolver = async () =>
  simulateDelay(PRODUCTS.map(p => ({ ...p, __typename: 'Product' })));

export const resolvers = {
  Query: {
    products,
  },
};
