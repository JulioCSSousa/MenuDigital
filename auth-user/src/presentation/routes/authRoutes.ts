import { Router } from 'express';
import { AuthController } from '../controller/authController';
import { AuthenticateUser } from '../../app/use-cases/authenticateUser';
import { RegisterUser } from '../../app/use-cases/registerUser';
import { AuthService } from '../../infrastructure/services/authService';
import { InMemoryUserRepository } from '../../infrastructure/repositories/InMemoryRepository';

const userRepository = new InMemoryUserRepository();
const authService = new AuthService(userRepository);
const authenticateUser = new AuthenticateUser(authService);
const registerUser = new RegisterUser(authService);
const authController = new AuthController(authenticateUser, registerUser);

const router = Router();

router.post('/login', (req, res) => authController.login(req, res));
router.post('/register', (req, res) => authController.register(req, res));

export default router;
