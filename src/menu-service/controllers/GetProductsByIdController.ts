import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Product } from '../entity/Product';

export class GetProductsByIdController {

    public async getProductById(req: Request, res: Response): Promise<Response> {
        const productRepository = AppDataSource.getRepository(Product);
        const product = await productRepository.findOne({
            where: { id: req.params.id },
            relations: ["combined"]
        });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.combined) {
            product.combined.forEach(combined => delete combined.id);
        }

        return res.json(product);
    }

}
