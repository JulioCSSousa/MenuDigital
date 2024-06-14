import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Additional } from '../entity/Additional';

export class AdditionalController {
  public async createAdditional(req: Request, res: Response): Promise<Response> {
    const additionalRepository = AppDataSource.getRepository(Additional);
    const newAdditional = additionalRepository.create(req.body);
    await additionalRepository.save(newAdditional);
    return res.json(newAdditional);
  }

  public async getAdditionals(req: Request, res: Response): Promise<Response> {
    const additionalRepository = AppDataSource.getRepository(Additional);
    const additionals = await additionalRepository.find();
    return res.json(additionals);
  }

  public async getAdditionalById(req: Request, res: Response): Promise<Response> {
    const additionalRepository = AppDataSource.getRepository(Additional);
    const additional = await additionalRepository.findOne({
      where: { id: Number(req.params.id) }
    });
    if (!additional) {
      return res.status(404).json({ message: 'Additional not found' });
    }
    return res.json(additional);
  }

  public async updateAdditional(req: Request, res: Response): Promise<Response> {
    const additionalRepository = AppDataSource.getRepository(Additional);
    let additional = await additionalRepository.findOne({ where: { id: Number(req.params.id) } });
    if (!additional) {
      return res.status(404).json({ message: 'Additional not found' });
    }
    additionalRepository.merge(additional, req.body);
    const result = await additionalRepository.save(additional);
    return res.json(result);
  }

  public async patchAdditional(req: Request, res: Response): Promise<Response> {
    try {
      const additionalRepository = AppDataSource.getRepository(Additional);
      const additional = await additionalRepository.findOne({ where: { id: Number(req.params.id) } });

      if (!additional) {
        return res.status(404).json({ message: 'Category not found' });
      }

      Object.keys(req.body).forEach((key) => {
        additional[key] = req.body[key];
      });

      const result = await additionalRepository.save(additional);
      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar additional' });
    }
  }

  public async deleteAdditional(req: Request, res: Response): Promise<Response> {
    const additionalRepository = AppDataSource.getRepository(Additional);
    const result = await additionalRepository.delete(Number(req.params.id));
    if (result.affected === 0) {
      return res.status(404).json({ message: 'Additional not found' });
    }
    return res.status(204).send();
  }
}
