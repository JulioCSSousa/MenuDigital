import { IAuthService } from '../interfaces/IAuthService';

export class AuthenticateUser {
  constructor(private authService: IAuthService) {}

  async execute(login: string, password: string): Promise<string | null> {
    return this.authService.authenticate(login, password);
  }
}
