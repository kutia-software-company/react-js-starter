import { apiRequest } from './Api';

export interface LoginRegisterResponse {
  auth_token: string;
  error?: string;
}

export interface RegisterInput {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
}

export interface UserDetailsResponse {
  user: User;
}

export const register = async (data: RegisterInput) =>
  apiRequest<RegisterInput, LoginRegisterResponse>(
    'post',
    'users/register',
    data
  );

export const login = async (data: LoginInput) =>
  apiRequest<LoginInput, LoginRegisterResponse>('post', 'users/login', data);

export const getUserDetails = async () =>
  apiRequest<undefined, UserDetailsResponse>('get', 'users/me');
