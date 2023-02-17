import {
  BaseEntity,
  DeleteResult,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { IBaseService } from '../interfaces/base-service.interfacce';

export class BaseService<T extends BaseEntity, R extends Repository<T>>
  implements IBaseService<T>
{
  protected readonly repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }

  index(): Promise<T[]> {
    return this.repository.find();
  }

  findOneBy(where: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T> {
    return this.repository.findOneBy(where);
  }

  create(data: Partial<T> | any): Promise<T> {
    return this.repository.save(data);
  }

  update(id: string, data: Partial<T> | any): Promise<UpdateResult> {
    return this.repository.update(id, data);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
