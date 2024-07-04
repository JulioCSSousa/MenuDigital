
import { Request, Response } from 'express';
import { AuthenticateUser } from '../../app/use-cases/authenticateUser';
import { RegisterUser } from '../../app/use-cases/registerUser';

export class AuthController {
  constructor(
    private authenticateUser: AuthenticateUser,
    private registerUser: RegisterUser
  ) {}

  async login(req: Request, res: Response): Promise<Response> {
    const { login, password } = req.body;
    const token = await this.authenticateUser.execute(login, password);
    if (token) {
      return res.json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  async register(req: Request, res: Response): Promise<Response> {
    const { login, password } = req.body;
    const user = await this.registerUser.execute(login, password);
    if (user) {
      return res.status(201).json({ user });
    } else {
      return res.status(400).json({ message: 'User already exists' });
    }
  }
}
