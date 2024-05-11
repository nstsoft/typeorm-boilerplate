export interface IDataSource<T> {
  findOneById(id: string): Promise<T | null>;
}
