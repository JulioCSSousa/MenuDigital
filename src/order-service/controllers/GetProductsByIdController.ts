import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Order } from '../entity/Order';

export class GetOrdersByIdController {

    public async getOrderById(req: Request, res: Response): Promise<Response> {
        const orderRepository = AppDataSource.getRepository(Order);
        const order = await orderRepository.findOne({
            where: { orderId: req.params.id },
        });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.json(order);
    }

}
