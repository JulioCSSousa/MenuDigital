import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { User } from '../entity/User';

export class PatchUsersController {

    public async patchUser(req: Request, res: Response): Promise<Response> {
        try {
            const userRepository = AppDataSource.getRepository(User);
            const user = await userRepository.findOne({ where: { userId: req.params.id } });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            Object.keys(req.body).forEach((key) => {
                user[key] = req.body[key];
            });

            const result = await userRepository.save(user);
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'error to update user' });
        }
    }

}
