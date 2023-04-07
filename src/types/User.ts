export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// ユーザー認証時の型定義、
export type AuthUserType = {
  user: User | undefined;
  isLoading: boolean;
  error: undefined | string;
};

export type RegisterParams = {
    username: string;
    email: string;
    password: string;
  };