export interface User {
  id: number,
  email: string,
  name?: string,
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
