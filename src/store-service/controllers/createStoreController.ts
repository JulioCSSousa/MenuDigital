import { Request, Response } from 'express';
import { AppDataSource } from '../../database';
import { Store } from '../entity/Store';
import { CreateAddressService } from '../../address-service/services/CreateAddressService';

export class CreateStoreController {
    public async createStore(req: Request, res: Response): Promise<Response> {
        const storeRepository = AppDataSource.getRepository(Store);
        const { address, ...storeData } = req.body;

        try {
            const createdAddress = await CreateAddressService.createAddress(address);
            console.log(createdAddress)
            const newStore = storeRepository.create({
                ...storeData,
                addressId: createdAddress.addressId
            });
            

            await storeRepository.save(newStore);

            return res.status(201).json(newStore);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

}
