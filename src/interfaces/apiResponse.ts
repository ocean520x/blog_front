export interface LoginData {
  token: string;
}

export interface ApiData<T> {
  code: number;
  data: T;
  success: boolean;
  message?: string;
}
