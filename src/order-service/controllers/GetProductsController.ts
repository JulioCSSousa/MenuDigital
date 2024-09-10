import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Order } from '../entity/Order';

export class GetOrdersController {


    public async getOrders(req: Request, res: Response): Promise<Response> {
        const orderRepository = AppDataSource.getRepository(Order);

        const page = parseInt(req.query.page as string, 10) || 1;
        const limit = parseInt(req.query.limit as string, 10) || 10;
        const offset = (page - 1) * limit;
        let [order, total]: any = [orderRepository];

        const main = req.query.main;

        [order, total] = await orderRepository.findAndCount({
            skip: offset,
            take: limit

        });

        const totalPages = Math.ceil(total / limit);

        order['deliveryAddress']
        return res.json({
            data: order,

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
