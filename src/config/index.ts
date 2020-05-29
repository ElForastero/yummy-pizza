/**
 * All available currencies in ISO
 */
export enum Currencies {
  EUR = 'EUR',
  USD = 'USD',
}

/**
 * The cover to be shown while product doesn't have one
 */
export const DEFAULT_PRODUCT_COVER = '/assets/covers/default.svg';

/**
 * @todo should be present on backend
 */
export const DELIVERY_COST = {
  EUR: 10,
  USD: 13,
};

/**
 * @todo should be present on backend
 */
export const FREE_DELIVERY = {
  EUR: 35,
  USD: 40,
};
