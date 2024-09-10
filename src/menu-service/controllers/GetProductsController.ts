import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Product } from '../entity/Product';

export class GetProductsController {


    public async getProducts(req: Request, res: Response): Promise<Response> {
        const productRepository = AppDataSource.getRepository(Product);

        const page = parseInt(req.query.page as string, 10) || 1;
        const limit = parseInt(req.query.limit as string, 10) || 10;
        const offset = (page - 1) * limit;
        let [product, total]: any = [productRepository];

        const main = req.query.main;
        let queryparam = null;
        if (main) {
            queryparam = main === 'true';
        }
        if (main) {
            [product, total] = await productRepository.findAndCount({
                relations: ["combined"],
                where: { combined: { mainMenu: queryparam } },
                skip: offset,
                take: limit

            });
        } else {
            [product, total] = await productRepository.findAndCount({
                relations: ["combined"],
                skip: offset,
                take: limit

            });
        }

        product.forEach(product => {
            if (product.combined) {
                product.combined.forEach(combined => delete combined.id);
            }
        });
        const totalPages = Math.ceil(total / limit);

        return res.json({
            data: product,

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
