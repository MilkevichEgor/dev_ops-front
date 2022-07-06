export const routePath = {
  home: '/',
  signIn: '/signin',
  signUp: '/signup',
  profile: '/me',
  cart: '/cart',
  product: '/product',
  search: '/search',
  favorites: '/favorites',
} as const;

export const booksQuantityPerPage = 12;

const BOOK_SORTING_OPTIONS = {
  price: 'price',
  averageRate: 'rating',
  dateOfIssue: 'date',
  author: 'author',
  title: 'name',
};

export default {
  booksQuantityPerPage,
  routePath,
  BOOK_SORTING_OPTIONS,
};
