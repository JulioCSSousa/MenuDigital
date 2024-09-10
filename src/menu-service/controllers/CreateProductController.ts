import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Product } from '../entity/Product';

export class CreateProductsController {

    public async createProduct(req: Request, res: Response): Promise<Response> {
        const productRepository = AppDataSource.getRepository(Product);
        let newProduct: any
        try {

            newProduct = productRepository.create(req.body);
            await productRepository.save(newProduct);
        }
        catch (exception) {
            return res.status(500).json("something went wrong: " + exception)
        }
        return res.json(newProduct);
    }
}