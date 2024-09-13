import { Request, Response } from 'express';
import { AppDataSource } from '../../database';
import { Address } from '../entity/Address';

export class AddressController {
    public async createAddress(req: Request, res: Response): Promise<Response> {

        const addressRepository = AppDataSource.getRepository(Address);
        const newAddress = addressRepository.create(req.body);
        const savedAddress = await addressRepository.save(newAddress)
        return res.json(savedAddress)

    }

    public async getAddress(req: Request, res: Response): Promise<Response> {
        const addressRepository = AppDataSource.getRepository(Address);
        const address = await addressRepository.find();
        return res.json(address);
    }

    public async getAddressById(req: Request, res: Response): Promise<Response> {

        const addressRepository = AppDataSource.getRepository(Address);
        let address = await addressRepository.findOne({ where: { addressId: req.params.id}});
        if (!address) {
            return res.status(404).json({ message: 'address not found' });
        }
        return res.json(address);
    }

    public async updateAddress(req: Request, res: Response): Promise<Response> {
        const addressRepository = AppDataSource.getRepository(Address);
        let address = await addressRepository.findOne({ where: { addressId: req.params.id } });
        if (!address) {
            return res.status(404).json({ message: 'address not found' });
        }
        addressRepository.merge(address, req.body);
        const result = await addressRepository.save(address);
        return res.json(result);
    }

    public async patchAddress(req: Request, res: Response): Promise<Response> {
        try {
            const addressRepository = AppDataSource.getRepository(Address);
            const address = await addressRepository.findOne({ where: { addressId: req.params.id } });

            if (!address) {
                return res.status(404).json({ message: 'address not found' });
            }

            Object.keys(req.body).forEach((key) => {
                address[key] = req.body[key];
            });

            const result = await addressRepository.save(address);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error to update address' });
        }
    }

    public async deleteAddress(req: Request, res: Response): Promise<Response> {
        const addressRepository = AppDataSource.getRepository(Address);
        const result = await addressRepository.delete({ addressId: req.params.id });
        if (result.affected === 0) {
            return res.status(404).json({ message: 'address not found' });
        }
        return res.status(204).send("Successful deleted");
    }
}
