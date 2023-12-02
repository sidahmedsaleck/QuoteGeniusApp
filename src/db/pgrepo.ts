import { GenericRepo } from 'src/core/abstract/genericRepo';
import { FindOptionsWhere, Repository } from 'typeorm';

export class PgRepo<T> implements GenericRepo<T> {
  private readonly _repo: Repository<T>;

  constructor(repo: Repository<T>) {
    this._repo = repo;
  }
  create(item: T): Promise<T> {
    return this._repo.save(item);
  }
  async update(options: FindOptionsWhere<T>, item: Partial<T>): Promise<T> {
    const _entity = await this._repo.findOne({ where: options });
    if (!_entity) {
      throw new Error('Entity not found');
    }
    return this._repo.save({ ..._entity, ...item });
  }
  delete(where: FindOptionsWhere<T> | string): Promise<T | any> {
    return this._repo.delete(where);
  }
  findAll(where?: FindOptionsWhere<T>): Promise<T[]> {
    return this._repo.find({ where });
  }

  findOne(where: FindOptionsWhere<T>): Promise<T> {
    return this._repo.findOne(where);
  }
}
