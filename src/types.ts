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
