import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Tenant } from '../entity/Tenant';

export class TenantController {
    public async createTenant(req: Request, res: Response): Promise<Response> {

        const tenantRepository = AppDataSource.getRepository(Tenant);
        const newtenant = tenantRepository.create(req.body);
        tenantRepository.save(newtenant)
        return res.json(newtenant)

    }

    public async getTenants(req: Request, res: Response): Promise<Response> {
        const tenantRepository = AppDataSource.getRepository(Tenant);

        const page = parseInt(req.query.page as string, 10) || 1;
        const limit = parseInt(req.query.limit as string, 10) || 10;
        const offset = (page - 1) * limit;
        const [tenant, total] = await tenantRepository.findAndCount({
          relations: ["stores", "address"],
          skip: offset,
          take: limit
        });
    
        const totalPages = Math.ceil(total / limit);
    
        return res.json({
          data: tenant,
          meta: {
            total,
            page,
            limit,
            totalPages
          }
        });
    }

    public async getTenantByRegister(req: Request, res: Response): Promise<Response> {

        const tenantRepository = AppDataSource.getRepository(Tenant);
        const tenant = await tenantRepository.findOne({
             where: { registerId: req.params.id },
             relations: ["stores", "address"]
            });
        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        return res.json(tenant);
    }

    public async getTenantById(req: Request, res: Response): Promise<Response> {

        const tenantRepository = AppDataSource.getRepository(Tenant);
        const tenant = await tenantRepository.findOne({
             where: { tenantId: req.params.id },
             relations: ["stores", "address"]
            });
        console.log(tenant)
        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        return res.json(tenant);
    }

    public async updateTenant(req: Request, res: Response): Promise<Response> {
        const tenantRepository = AppDataSource.getRepository(Tenant);
        let tenant = await tenantRepository.findOne({ where: { tenantId: req.params.id } });
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
            const tenant = await tenantRepository.findOne({ where: { tenantId: req.params.id } });

            if (!tenant) {
                return res.status(404).json({ message: 'Tenant not found' });
            }

            Object.keys(req.body).forEach((key) => {
                Tenant[key] = req.body[key];
            });

            const result = await tenantRepository.save(tenant);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error to update Tenant' });
        }
    }

    public async deleteTenant(req: Request, res: Response): Promise<Response> {
        const tenantRepository = AppDataSource.getRepository(Tenant);
        const result = await tenantRepository.delete(req.params.id);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        return res.status(204).send("Deleted");
    }
}
