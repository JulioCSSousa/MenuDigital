import { Request, Response } from 'express';
import { AppDataSource } from '../../database';
import { Store } from '../entity/Store';
import { StoreDto, toDto} from '../interfaces/dtos/storeDto';
import { toDtoResponse } from '../interfaces/dtos/storeDtoResponse';
import { CreateAddressService } from '../../address-service/services/CreateAddressService';

export class StoreController {

    public async createStore(req: Request, res: Response): Promise<Response> {
        const storeRepository = AppDataSource.getRepository(Store);
        const { address, ...storeData } = req.body;

        try {
            const createAddress = await CreateAddressService.createAddress(address);

            const newstore = storeRepository.create({ ...storeData, address: createAddress});
            storeRepository.save(newstore)
            return res.status(201).json(newstore);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
        
    }

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

        const result: StoreDto[] = toDtoResponse(store)

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
    
    public async getStoreById(req: Request, res: Response): Promise<Response> {

        const storeRepository = AppDataSource.getRepository(Store);
        let store = await storeRepository.findOne({
            where: { storeId: req.params.id },
            relations: ['socialMedias']
        });
        if (!store) {
            return res.status(404).json({ message: 'store not found' });
        }
        return res.json(store);
    }

    public async updateStore(req: Request, res: Response): Promise<Response> {
        const storeRepository = AppDataSource.getRepository(Store);
        let store = await storeRepository.findOne({ where: { storeId: req.params.id } });
        if (!store) {
            return res.status(404).json({ message: 'store not found' });
        }
        storeRepository.merge(store, req.body);
        const result = await storeRepository.save(store);
        return res.json(result);
    }

    public async patchStore(req: Request, res: Response): Promise<Response> {
        try {
            const storeRepository = AppDataSource.getRepository(Store);
            const store = await storeRepository.findOne({ where: { storeId: req.params.id } });

            if (!store) {
                return res.status(404).json({ message: 'store not found' });
            }

            Object.keys(req.body).forEach((key) => {
                store[key] = req.body[key];
            });

            const result = await storeRepository.save(store);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error to update store' });
        }
    }

    public async deleteStore(req: Request, res: Response): Promise<Response> {
        const storeRepository = AppDataSource.getRepository(Store);
        const result = await storeRepository.delete(req.params.id);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'store not found' });
        }
        return res.status(204).json({message: "Successful deleted"});
    }
}
