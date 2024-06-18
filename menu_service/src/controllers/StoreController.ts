import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Store } from '../entity/Store';
import * as yup from "yup";
import { BodyValidation } from '../shared/middleware/storeValidation';
import { StatusCodes } from 'http-status-codes';

export class StoreController {
    public async createStore(req: Request, res: Response): Promise<Response> {

        try {
            await BodyValidation.validate(req.body, { abortEarly: true })
        } catch (exceptions) {

            const yupError = exceptions as yup.ValidationError
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: {
                    default: yupError.message,
                }
            })
        };

        const storeRepository = AppDataSource.getRepository(Store);
        const newstore = storeRepository.create(req.body);
        return res.json(newstore)

    }

    public async getStores(req: Request, res: Response): Promise<Response> {
        const storeRepository = AppDataSource.getRepository(Store);
        const categories = await storeRepository.find({ relations: ["category"] });
        return res.json(categories);
    }

    public async getStoreByCnpj(req: Request, res: Response): Promise<Response> {

        const storeRepository = AppDataSource.getRepository(Store);
        let store = await storeRepository.findOne({ where: { registerId: req.params.registerId } });
        if (!store) {
            return res.status(404).json({ message: 'store not found' });
        }
        return res.json(store);
    }

    public async updateStore(req: Request, res: Response): Promise<Response> {
        const storeRepository = AppDataSource.getRepository(Store);
        let store = await storeRepository.findOne({ where: { registerId: req.params.registerId } });
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
            const store = await storeRepository.findOne({ where: { registerId: req.params.registerId } });

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
        const result = await storeRepository.delete(req.params.registerId);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'store not found' });
        }
        return res.status(204).send();
    }
}
