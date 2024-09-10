import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { User } from '../entity/User';

export class GetUsersByIdController {

    public async getUserById(req: Request, res: Response): Promise<Response> {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { userId: req.params.id },
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json(user);
    }

}
