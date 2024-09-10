import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Order } from '../entity/Order';

export class DeleteOrdersController {

    public async deleteOrder(req: Request, res: Response): Promise<Response> {
        const orderRepository = AppDataSource.getRepository(Order);
        const result = await orderRepository.delete(req.params.id);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(204).json({ message: "Successful deleted" });
    }
}
