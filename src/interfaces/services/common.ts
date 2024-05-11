export interface IService<T> {
  findUser(id: string): Promise<T | null>;
}
