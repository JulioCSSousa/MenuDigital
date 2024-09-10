import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { User } from '../entity/User';

export class GetUsersController {


    public async getUsers(req: Request, res: Response): Promise<Response> {
        const userRepository = AppDataSource.getRepository(User);

        const page = parseInt(req.query.page as string, 10) || 1;
        const limit = parseInt(req.query.limit as string, 10) || 10;
        const offset = (page - 1) * limit;
        let [user, total]: any = [userRepository];

        const main = req.query.main;

        [user, total] = await userRepository.findAndCount({
            skip: offset,
            take: limit

        });

        const totalPages = Math.ceil(total / limit);

        user['deliveryAddress']
        return res.json({
            data: user,

            meta: {
                total,
                page,
                limit,
                totalPages,
                main
            }
        });
    }

}
