import { CustomResolver } from '@apollo/client';
import { CartDocument, CartItem } from 'src/api/graphql';
import { simulateDelay } from 'src/api/utils/simulateDelay';
import { CART, PRODUCTS } from './mock';

/**
 * @todo This should be on backend
 */
const cart: CustomResolver = async () =>
  simulateDelay(
    CART.map(({ product, ...rest }) => ({
      ...rest,
      product: { ...product, __typename: 'Product' },
    }))
  );

/**
 * @todo This should be on backend
 */
const addToCart: CustomResolver = async (root, args, { cache }) => {
  const previous = cache.readQuery({ query: CartDocument });
  const product = PRODUCTS.find(({ id }) => id === args.id)!;
  const id = `${product.id}-${args.size}`;
  const inTheCart = previous.cart.find((item: CartItem) => item.id === id);
  const newItem = inTheCart
    ? { ...inTheCart }
    : {
        id,
        product: {
          ...product,
          __typename: 'Product',
        },
        count: args.count,
        size: args.size,
      };

  if (inTheCart) {
    newItem.count += args.count;
  }

  const cart = [
    ...previous.cart.filter((item: CartItem) => item.id !== id),
    newItem,
  ];

  const sorted = [...cart].sort((a, b) => (a.id > b.id ? 1 : -1));
  cache.writeQuery({ query: CartDocument, data: { cart: sorted } });

  return sorted;
};

/**
 * @todo This should be on backend
 */
const removeFromCart: CustomResolver = async (root, args, { cache }) => {
  const previous = cache.readQuery({ query: CartDocument });
  const data = {
    cart: previous.cart.filter(({ id }: CartItem) => id !== args.id),
  };
  cache.writeQuery({ query: CartDocument, data });

  return data.cart;
};

export const resolvers = {
  Query: {
    cart,
  },
  Mutation: {
    addToCart,
    removeFromCart,
  },
};
