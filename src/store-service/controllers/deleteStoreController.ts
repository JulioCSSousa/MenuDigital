import { Request, Response } from 'express';
import { AppDataSource } from '../../database';
import { Store } from '../entity/Store';

export class DeleteStoreController {
    public async deleteStore(req: Request, res: Response): Promise<Response> {
        const storeRepository = AppDataSource.getRepository(Store);
        const result = await storeRepository.delete(req.params.id);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'store not found' });
        }
        return res.status(204).json({ message: "Successful deleted" });
    }
}
