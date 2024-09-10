import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { User } from '../entity/User';

export class CreateUsersController {

    public async createUser(req: Request, res: Response): Promise<Response> {
        const userRepository = AppDataSource.getRepository(User);
        let newUser: any
        try {

            newUser = userRepository.create(req.body);
            await userRepository.save(newUser);
        }
        catch (exception) {
            return res.status(500).json("something went wrong: " + exception)
        }
        return res.json(newUser);
    }
}