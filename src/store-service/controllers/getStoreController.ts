import { Request, Response } from 'express';
import { AppDataSource } from '../../database';
import { Store } from '../entity/Store';

import { toDtoResponse } from '../transformer/getStoresTransformer';
import { StoreResponse } from '../responses/storeResponse';

export class GetStoreController {

    async getStores(req: Request, res: Response): Promise<Response> {
        const storeRepository = AppDataSource.getRepository(Store);

        const page = parseInt(req.query.page as string, 10) || 1;
        const limit = parseInt(req.query.limit as string, 10) || 10;
        const offset = (page - 1) * limit;
        const [store, total] = await storeRepository.findAndCount({
            relations: ['socialMedias'],
            skip: offset,
            take: limit
        });

        const totalPages = Math.ceil(total / limit);

        const result: StoreResponse[] = await toDtoResponse(store)
        return res.json({
            data: result,
            meta: {
                total,
                page,
                limit,
                totalPages
            }
        });
    }

}
