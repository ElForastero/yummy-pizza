import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Size {
  S = 'S',
  M = 'M',
  L = 'L',
}

export type Price = {
  __typename?: 'Price';
  size: Size;
  EUR: Scalars['Float'];
  USD: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  prices: Array<Price>;
  cover: Maybe<Scalars['String']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  product: Product;
  size: Size;
  count: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  products: Array<Product>;
  cart: Array<CartItem>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart: Array<CartItem>;
  removeFromCart: Array<CartItem>;
};

export type MutationAddToCartArgs = {
  id: Scalars['ID'];
  size: Size;
  count: Scalars['Int'];
};

export type MutationRemoveFromCartArgs = {
  id: Scalars['ID'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Size: Size;
  Price: ResolverTypeWrapper<Price>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Product: ResolverTypeWrapper<Product>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  CartItem: ResolverTypeWrapper<CartItem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Size: Size;
  Price: Price;
  Float: Scalars['Float'];
  Product: Product;
  ID: Scalars['ID'];
  CartItem: CartItem;
  Int: Scalars['Int'];
  Query: {};
  Mutation: {};
};

export type PriceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']
> = {
  size: Resolver<ResolversTypes['Size'], ParentType, ContextType>;
  EUR: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  USD: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices: Resolver<Array<ResolversTypes['Price']>, ParentType, ContextType>;
  cover: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CartItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']
> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  size: Resolver<ResolversTypes['Size'], ParentType, ContextType>;
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  products: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  cart: Resolver<Array<ResolversTypes['CartItem']>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addToCart: Resolver<
    Array<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddToCartArgs, 'id' | 'size' | 'count'>
  >;
  removeFromCart: Resolver<
    Array<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveFromCartArgs, 'id'>
  >;
};

export type Resolvers<ContextType = any> = {
  Price: PriceResolvers<ContextType>;
  Product: ProductResolvers<ContextType>;
  CartItem: CartItemResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type AddToCartMutationVariables = {
  id: Scalars['ID'];
  size: Size;
  count: Scalars['Int'];
};

export type AddToCartMutation = { __typename?: 'Mutation' } & {
  addToCart: Array<
    { __typename?: 'CartItem' } & Pick<CartItem, 'id' | 'size' | 'count'> & {
        product: { __typename?: 'Product' } & Pick<Product, 'id'>;
      }
  >;
};

export type RemoveFromCartMutationVariables = {
  id: Scalars['ID'];
};

export type RemoveFromCartMutation = { __typename?: 'Mutation' } & {
  removeFromCart: Array<
    { __typename?: 'CartItem' } & Pick<CartItem, 'id' | 'size' | 'count'> & {
        product: { __typename?: 'Product' } & Pick<Product, 'id'>;
      }
  >;
};

export type CartQueryVariables = {};

export type CartQuery = { __typename?: 'Query' } & {
  cart: Array<
    { __typename?: 'CartItem' } & Pick<CartItem, 'id' | 'size' | 'count'> & {
        product: { __typename?: 'Product' } & Pick<
          Product,
          'id' | 'title' | 'cover'
        > & {
            prices: Array<
              { __typename?: 'Price' } & Pick<Price, 'size' | 'EUR' | 'USD'>
            >;
          };
      }
  >;
};

export type ProductsQueryVariables = {};

export type ProductsQuery = { __typename?: 'Query' } & {
  products: Array<
    { __typename?: 'Product' } & Pick<
      Product,
      'id' | 'title' | 'description' | 'cover'
    > & {
        prices: Array<
          { __typename?: 'Price' } & Pick<Price, 'size' | 'EUR' | 'USD'>
        >;
      }
  >;
};

export const AddToCartDocument = gql`
  mutation addToCart($id: ID!, $size: Size!, $count: Int!) {
    addToCart(id: $id, size: $size, count: $count) @client {
      id
      product {
        id
      }
      size
      count
    }
  }
`;
export type AddToCartMutationFn = ApolloReactCommon.MutationFunction<
  AddToCartMutation,
  AddToCartMutationVariables
>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *      size: // value for 'size'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useAddToCartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddToCartMutation,
    AddToCartMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddToCartMutation,
    AddToCartMutationVariables
  >(AddToCartDocument, baseOptions);
}
export type AddToCartMutationHookResult = ReturnType<
  typeof useAddToCartMutation
>;
export type AddToCartMutationResult = ApolloReactCommon.MutationResult<
  AddToCartMutation
>;
export type AddToCartMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddToCartMutation,
  AddToCartMutationVariables
>;
export const RemoveFromCartDocument = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) @client {
      id
      product {
        id
      }
      size
      count
    }
  }
`;
export type RemoveFromCartMutationFn = ApolloReactCommon.MutationFunction<
  RemoveFromCartMutation,
  RemoveFromCartMutationVariables
>;

/**
 * __useRemoveFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCartMutation, { data, loading, error }] = useRemoveFromCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFromCartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveFromCartMutation,
    RemoveFromCartMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    RemoveFromCartMutation,
    RemoveFromCartMutationVariables
  >(RemoveFromCartDocument, baseOptions);
}
export type RemoveFromCartMutationHookResult = ReturnType<
  typeof useRemoveFromCartMutation
>;
export type RemoveFromCartMutationResult = ApolloReactCommon.MutationResult<
  RemoveFromCartMutation
>;
export type RemoveFromCartMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveFromCartMutation,
  RemoveFromCartMutationVariables
>;
export const CartDocument = gql`
  query cart {
    cart @client {
      id
      product {
        id
        title
        cover
        prices {
          size
          EUR
          USD
        }
      }
      size
      count
    }
  }
`;

/**
 * __useCartQuery__
 *
 * To run a query within a React component, call `useCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useCartQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CartQuery, CartQueryVariables>
) {
  return ApolloReactHooks.useQuery<CartQuery, CartQueryVariables>(
    CartDocument,
    baseOptions
  );
}
export function useCartLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CartQuery,
    CartQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<CartQuery, CartQueryVariables>(
    CartDocument,
    baseOptions
  );
}
export type CartQueryHookResult = ReturnType<typeof useCartQuery>;
export type CartLazyQueryHookResult = ReturnType<typeof useCartLazyQuery>;
export type CartQueryResult = ApolloReactCommon.QueryResult<
  CartQuery,
  CartQueryVariables
>;
export const ProductsDocument = gql`
  query products {
    products @client {
      id
      title
      description
      cover
      prices {
        size
        EUR
        USD
      }
    }
  }
`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    baseOptions
  );
}
export function useProductsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    baseOptions
  );
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>;
export type ProductsQueryResult = ApolloReactCommon.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>;
