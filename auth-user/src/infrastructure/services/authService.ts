import { IAuthService } from '../../app/interfaces/IAuthService';
import { IUserRepository } from '../../app/interfaces/IUserRepository';
import { User } from '../../domain/entity/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

export class AuthService implements IAuthService {
  constructor(private userRepository: IUserRepository) {}

  async authenticate(login: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findBylogin(login);
    if (user && await bcrypt.compare(password, user.password)) {
      return jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    }
    return null;
  }

  async register(login: string, password: string): Promise<User | null> {
    if (await this.userRepository.findBylogin(login)) {
      return null;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = { id: uuidv4(), login, password: hashedPassword };
    await this.userRepository.save(newUser);
    return newUser;
  }
}
