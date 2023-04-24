const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;
const BASE_USER_API = API_DOMAIN + '/api/users';

export const USER_URL = {
  importData: BASE_USER_API + '/importdata',
  incomeLt5BmwMerc: BASE_USER_API + '/income-lt-5-bmw-merc',
  malePhonePriceGt10000: BASE_USER_API + '/male-phone-price-gt-10000',
  lastNameMQuoteGt15EmailIn:
    BASE_USER_API + '/last-name-M-quote-gt-15-email-in',
  bmwMercAudiEmailNoDigit: BASE_USER_API + '/bmw-merc-audi-email-no-digit',
  top10CitiesHighestUsersAvgIncome:
    BASE_USER_API + '/top-10-cities-highest-users-avg-income',
  allUsers: BASE_USER_API + '/all-users',
};

export const userSchema = {
  id: 'ID',
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  gender: 'Gender',
  income: 'Income',
  city: 'City',
  car: 'Car',
  quote: 'Quote',
  phone_price: 'Phone Price',
};

export const citySchema = {
  _id: 'City',
  count: 'Highest Users',
  avgIncome: 'Average Income',
};
