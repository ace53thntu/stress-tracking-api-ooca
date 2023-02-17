import { DeleteResult, FindOptionsWhere, UpdateResult } from 'typeorm';

export interface IBaseService<T> {
  index(): Promise<T[]>;

  findOneBy(where: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T>;

  create(data: Partial<T> | any): Promise<T>;

  update(id: string, data: Partial<T> | any): Promise<UpdateResult>;

  delete(id: string): Promise<DeleteResult>;
}
