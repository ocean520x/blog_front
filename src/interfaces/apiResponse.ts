export interface UserModel {
  updated_at: string;
  name: string;
  created_at: string;
  email_verified_at: string;
  id: number;
  avatar?: string;
  email: string;
  is_super_admin: string;
}
export interface LoginData {
  user: UserModel;
  token: string;
}

export interface ApiData<T> {
  code: number;
  data: T;
  success: boolean;
  message?: string;
}
