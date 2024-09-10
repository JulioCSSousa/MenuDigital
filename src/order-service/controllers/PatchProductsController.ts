import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Order } from '../entity/Order';

export class PatchOrdersController {

    public async patchOrder(req: Request, res: Response): Promise<Response> {
        try {
            const orderRepository = AppDataSource.getRepository(Order);
            const order = await orderRepository.findOne({ where: { orderId: req.params.id } });

            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            Object.keys(req.body).forEach((key) => {
                order[key] = req.body[key];
            });

            const result = await orderRepository.save(order);
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'error to update order' });
        }
    }

}
