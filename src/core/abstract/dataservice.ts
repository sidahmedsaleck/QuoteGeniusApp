import { User } from 'src/core/entities/user';
import { GenericRepo } from './genericRepo';

export abstract class DataService {
  abstract user: GenericRepo<User>;
}
