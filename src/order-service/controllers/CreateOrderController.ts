import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Order } from '../entity/Order';

export class CreateOrdersController {

    public async createOrder(req: Request, res: Response): Promise<Response> {
        const orderRepository = AppDataSource.getRepository(Order);
        let newOrder: any
        try {

            newOrder = orderRepository.create(req.body);
            await orderRepository.save(newOrder);
        }
        catch (exception) {
            return res.status(500).json("something went wrong: " + exception)
        }
        return res.json(newOrder);
    }
}