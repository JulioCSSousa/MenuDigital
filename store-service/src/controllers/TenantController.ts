import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Tenant } from '../entity';
import { register } from 'tsconfig-paths';


export class TenantController {
    public async createTenant(req: Request, res: Response): Promise<Response> {


        const tenantRepository = AppDataSource.getRepository(Tenant);
        const newtenant = tenantRepository.create(req.body);
        tenantRepository.save(newtenant)
        return res.json(newtenant)

    }

    public async getTenants(req: Request, res: Response): Promise<Response> {
        const tenantRepository = AppDataSource.getRepository(Tenant);
        const categories = await tenantRepository.find();
        return res.json(categories);
    }

    public async getTenantByRegister(req: Request, res: Response): Promise<Response> {

        const tenantRepository = AppDataSource.getRepository(Tenant);
        let tenant = await tenantRepository.findOne({ where: { registerId: req.params.registerId } });
        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        return res.json(tenant);
    }

    public async getTenantById(req: Request, res: Response): Promise<Response> {

        const tenantRepository = AppDataSource.getRepository(Tenant);
        let tenant = await tenantRepository.findOne({ where: { tenantId: req.params.tenantId } });
        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        return res.json(tenant);
    }

    public async updateTenant(req: Request, res: Response): Promise<Response> {
        const tenantRepository = AppDataSource.getRepository(Tenant);
        let tenant = await tenantRepository.findOne({ where: { tenantId: req.params.tenantId } });
        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        tenantRepository.merge(tenant, req.body);
        const result = await tenantRepository.save(tenant);
        return res.json(result);
    }

    public async patchTenant(req: Request, res: Response): Promise<Response> {
        try {
            const tenantRepository = AppDataSource.getRepository(Tenant);
            const tenant = await tenantRepository.findOne({ where: { tenantId: req.params.tenantId } });

            if (!tenant) {
                return res.status(404).json({ message: 'Tenant not found' });
            }

            Object.keys(req.body).forEach((key) => {
                Tenant[key] = req.body[key];
            });

            const result = await tenantRepository.save(Tenant);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error to update Tenant' });
        }
    }

    public async deleteTenant(req: Request, res: Response): Promise<Response> {
        const tenantRepository = AppDataSource.getRepository(Tenant);
        const result = await tenantRepository.delete(req.params.tenantId);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        return res.status(204).send();
    }
}
