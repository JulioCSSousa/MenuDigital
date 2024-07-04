import { IUserRepository } from '../../app/interfaces/IUserRepository';
import { User } from '../../domain/entity/User';

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async findBylogin(login: string): Promise<User | null> {
    return this.users.find(user => user.login === login) || null;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
