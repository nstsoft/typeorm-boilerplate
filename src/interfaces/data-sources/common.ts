import { Deleted, Pagination, Updated } from 'types';

export interface IDataSource<T, C> {
  findOneById(id: string): Promise<T | null>;
  create(data: C): Promise<T>;
  findOne(criteria: Partial<T>): Promise<T>;
  findAll(criteria: Partial<C>, pagination?: Pagination): Promise<{ count: number; data: T[] }>;
  delete(id: string | string[]): Promise<Deleted>;
  updateOne(id: string, data: Partial<C>): Promise<Updated>;
}
