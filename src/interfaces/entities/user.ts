import { ObjectId } from 'typeorm';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface IRawUser {
  email: string;
  password: string;
  role: UserRole;
  _id: ObjectId;
}

export interface IUser extends IRawUser {
  toRaw(): IRawUser;
}
