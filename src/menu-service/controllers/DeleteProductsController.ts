import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Product } from '../entity/Product';

export class DeleteProductsController {

    public async deleteProduct(req: Request, res: Response): Promise<Response> {
        const productRepository = AppDataSource.getRepository(Product);
        const result = await productRepository.delete(req.params.id);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(204).json({ message: "Successful deleted" });
    }
}
