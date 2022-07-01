export const routePath = {
  home: '/',
  signIn: '/signin',
  signUp: '/signup',
  profile: '/me',
  cart: '/cart',
  product: '/product',
  // product: '/product/:productId',
  // getProductLink(productId: number) {
  //   return this.product.replace(':productId', productId.toString());
  // },
  search: '/search',
  favorites: '/favorites',
};

export const booksQuantityPerPage = 12;

export default {
  booksQuantityPerPage,
  routePath,
};
