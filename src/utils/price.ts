import { Price } from 'src/api/graphql';
import { Currencies, DELIVERY_COST, FREE_DELIVERY } from 'src/config';

export const CurrSymbolsMap = new Map<Currencies, string>([
  [Currencies.EUR, '€'],
  [Currencies.USD, '＄'],
]);

/**
 * Get the lowest of available prices for the given currency
 */
export const getMinPrice = (
  prices: Array<Price>,
  currency: Currencies = Currencies.EUR
): number => Math.min(...prices.map(({ [currency]: price }) => price));

/**
 * Get fixed price with currency sign
 */
export const formatPrice = (price: number, currency: Currencies): string =>
  `${price.toFixed(2)} ${CurrSymbolsMap.get(currency)}`;

/**
 * Calculate total sum based on delivery costs.
 * Basically, it should be implemented on backend with address checking.
 */
export const getDeliveryCost = (sum: number, currency: Currencies) => {
  if (sum < FREE_DELIVERY[currency]) {
    return DELIVERY_COST[currency];
  }

  return 0;
};
