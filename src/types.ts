export interface User {
  id: number,
  email: string,
  name?: string,
  avatar?: string,
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
}
export type Books = Book[];

export interface Genre {
  genreId: number;
  name: string;
}

export type Genres = Genre[];
