export interface User {
  _id?: string;
  name: string;
  age: number;
  email: string;
  address: string;
  __v?: number;
}

export interface Users {
  users: Array<User>;
}

export interface PostUserResponse {
  user: User;
}

export interface ErrorResponse {
  message: string;
}
