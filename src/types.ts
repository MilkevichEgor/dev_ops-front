export interface User {
  id: number,
  email: string,
  name?: string,
  avatar?: string,
  ratings?: RatingObj[]
}

export type RatingObj = {
  book: Book,
  rating: number,
}

export type Token = string | undefined;

export type AuthResponse = {
  token: string;
  user: User
  message?: string;
};

export type AuthData = {
  password: string;
  email: string;
};
export interface Book {
  author: string;
  bookId: number;
  cover: string;
  dateOfIssue?: Date;
  price: number;
  quantity?: number;
  title: string;
  description: string;
  averageRate: number;
  comments: Comment[]
}
export type Books = Book[];

export interface Genre {
  genreId: number;
  name: string;
}

export type Comment = {
  comment_id: number;
  date: string;
  text: string;
  user: User;
}

export type Genres = Genre[];
