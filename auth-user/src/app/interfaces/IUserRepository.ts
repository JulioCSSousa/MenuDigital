import { User } from '../../domain/entity/User';

export interface IUserRepository {
  findBylogin(login: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
