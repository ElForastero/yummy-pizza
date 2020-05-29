import { homepage } from 'src/../package.json';

export const PRODUCTS = [
  {
    id: '1',
    title: 'Pepperoni',
    description: 'Double pepperoni, mozzarella, marinara sauce, fresh basil',
    prices: [
      { size: 'S', EUR: 11.0, USD: 13.0 },
      { size: 'M', EUR: 13.0, USD: 15.0 },
      { size: 'L', EUR: 15.0, USD: 18.0 },
    ],
    cover: `${homepage}/assets/covers/1.jpg`,
  },
  {
    id: '2',
    title: 'From Russia with Love',
    description:
      'Fries, ranch , grilled chicken, marinara sauce, red onions, pickles , mozzarella',
    prices: [
      { size: 'S', EUR: 13.0, USD: 15.0 },
      { size: 'M', EUR: 15.0, USD: 17.0 },
      { size: 'L', EUR: 17.0, USD: 19.5 },
    ],
    cover: `${homepage}/assets/covers/2.jpg`,
  },
  {
    id: '3',
    title: 'Chicken BBQ',
    description:
      'Grilled chicken, bbq sauce, bacon, mozzarella, fresh basil, red onions',
    prices: [
      { size: 'S', EUR: 11.0, USD: 13.0 },
      { size: 'M', EUR: 14.5, USD: 18.0 },
      { size: 'L', EUR: 18.0, USD: 22.0 },
    ],
    cover: `${homepage}/assets/covers/3.jpg`,
  },
  {
    id: '4',
    title: 'Hawaiian',
    description:
      'Ham, fresh pineapple, mozzarella, marinara sauce, fresh basil',
    prices: [
      { size: 'S', EUR: 10.0, USD: 12.0 },
      { size: 'M', EUR: 12.0, USD: 14.0 },
      { size: 'L', EUR: 14.0, USD: 16.0 },
    ],
    cover: `${homepage}/assets/covers/4.jpg`,
  },
  {
    id: '5',
    title: 'Spinach Feta',
    description:
      'Fresh spinach, feta, ricotta, mozzarella, fresh parsley, red onions',
    prices: [
      { size: 'S', EUR: 11.0, USD: 13.0 },
      { size: 'M', EUR: 15.0, USD: 18.0 },
      { size: 'L', EUR: 17.5, USD: 121.0 },
    ],
    cover: `${homepage}/assets/covers/5.jpg`,
  },
  {
    id: '6',
    title: 'Veggie',
    description:
      'Green peppers, cherry tomatoes, mozzarella, ricotta, fresh parsley, mushrooms, black olives, red onions',
    prices: [
      { size: 'S', EUR: 11.0, USD: 13.0 },
      { size: 'M', EUR: 13.0, USD: 15.0 },
      { size: 'L', EUR: 15.0, USD: 17.0 },
    ],
    cover: `${homepage}/assets/covers/6.jpg`,
  },
  {
    id: '7',
    title: 'Chicken Club',
    description:
      'Grilled chicken, cherry tomatoes, ricotta, fresh parsley, mozzarella, bacon, red onions',
    prices: [
      { size: 'S', EUR: 12.0, USD: 15.0 },
      { size: 'M', EUR: 15.0, USD: 19.0 },
      { size: 'L', EUR: 18.0, USD: 21.0 },
    ],
    cover: `${homepage}/assets/covers/7.jpg`,
  },
  {
    id: '8',
    title: 'Cheese',
    description: 'Mozzarella, marinara sauce, fresh basil',
    prices: [
      { size: 'S', EUR: 11.9, USD: 15.0 },
      { size: 'M', EUR: 14.0, USD: 17.0 },
      { size: 'L', EUR: 17.0, USD: 19.9 },
    ],
    cover: `${homepage}/assets/covers/8.jpg`,
  },
];

/**
 * @todo Identifiers should be handled on backend
 */
export const CART = [
  {
    id: `${PRODUCTS[0].id}-M`,
    product: PRODUCTS[0],
    size: 'M',
    count: 1,
  },
  {
    id: `${PRODUCTS[7].id}-S`,
    product: PRODUCTS[7],
    size: 'S',
    count: 2,
  },
];
