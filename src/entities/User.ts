export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type User = {
  email: string;
  password: string;
  role: UserRole;
};
