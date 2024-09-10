import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { User } from '../entity/User';

export class DeleteUsersController {

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        const userRepository = AppDataSource.getRepository(User);
        const result = await userRepository.delete(req.params.id);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(204).json({ message: "Successful deleted" });
    }
}
