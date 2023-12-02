export abstract class GenericRepo<T> {
  abstract create(item: Partial<T>): Promise<T | null>;
  abstract update(filter: object, item: Partial<T>): Promise<T>;
  abstract delete(filter: object): Promise<T>;
  abstract findAll(filter?: object): Promise<T[]>;
  abstract findOne(where: object): Promise<T>;
}
