import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Product } from '../entity/Product';

export class PatchProductsController {


    public async patchProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productRepository = AppDataSource.getRepository(Product);
            const product = await productRepository.findOne({ where: { id: req.params.id }, relations: ["category", "combined"] });

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            Object.keys(req.body).forEach((key) => {
                product[key] = req.body[key];
            });

            const result = await productRepository.save(product);
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'error to update product' });
        }
    }

}
