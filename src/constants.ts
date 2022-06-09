export const routePath = {
  home: '/',
  signIn: '/signin',
  signUp: '/signup',
  profile: '/me',
  cart: '/cart',
  product: '/product/:id',
  getProductUrl(id: number) {
    return `/product/${id}`;
  },
};

export const booksQuantityPerPage = 12;

export default {
  booksQuantityPerPage,
  routePath,
};
