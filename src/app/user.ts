export class User {
  id: number;
  gold: number;
  first_name: string;
}

export interface RegisterData {
  first_name: null | string;
  last_name: null | string;
  email: null | string;
  password: null | string;
}

export interface LoginData {
  email: null | string;
  password: null | string;
}