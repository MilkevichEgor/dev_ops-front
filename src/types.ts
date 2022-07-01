export type AuthResponse = {
  token: string;
  user: User
  message?: string;
};

export type AuthData = {
  password: string;
  email: string;
};

export type Token = string | undefined;

export type User = {
  id: number;
  email: string;
  name?: string;
  avatar?: string;
  ratings?: RatingObj[];
  books?: BooksArray;
}

export type RatingObj = {
  book: Book;
  rating: number;
}

export type Book = {
  author: string;
  bookId: number;
  cover: string;
  dateOfIssue?: Date;
  price: number;
  quantity?: number;
  title: string;
  description: string;
  averageRate: number;
  comments: Comment[];
  isInFavorite: boolean;
}
export type BooksArray = Book[];

export type QuerySearchOptions = {
  page?: string;
  limit?: string;
  genres?: string;
  priceFrom?: string;
  priceTo?: string;
  order?: string;
  orderDir?: string;
  value?: string;
}

export type Genre = {
  genreId: number;
  name: string;
}

export type Comment = {
  commentId: number;
  date: string;
  text: string;
  user: User;
}

export type Genres = Genre[];
