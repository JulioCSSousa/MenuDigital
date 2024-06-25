import { IAuthService } from '../interfaces/IAuthService';
import { User } from '../../domain/entity/User';

export class RegisterUser {
  constructor(private authService: IAuthService) {}

  async execute(login: string, password: string): Promise<User | null> {
    return this.authService.register(login, password);
  }
}
