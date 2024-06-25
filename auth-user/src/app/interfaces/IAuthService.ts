import { User } from "../../domain/entity/User";

export interface IAuthService {
    authenticate(login: string, password: string): Promise<string | null>;
    register(login: string, password: string): Promise<User | null>;
  }