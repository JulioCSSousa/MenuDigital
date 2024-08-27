import { Request, Response } from 'express';
import { AppDataSource } from '../../database/data-source';
import { Combined } from '../entity/Combined';
import { CombinedDto, combinedToDto } from '../dtos/combinedDto';

export class CombinedController {
  public async createcombined(req: Request, res: Response): Promise<Response> {
    const combinedRepository = AppDataSource.getRepository(Combined);
    const newcombined = combinedRepository.create(req.body);
    await combinedRepository.save(newcombined);
    return res.json(newcombined);
  }

  public async getcombineds(req: Request, res: Response): Promise<Response> {
    const combinedRepository = AppDataSource.getRepository(Combined);
    const combined = await combinedRepository.find();
    const combinedsDto = combined.map(c =>
      new CombinedDto(c.type, c.category, c.mainMenu, c.size, c.min, c.max,))
    return res.json(combinedsDto);
  }

  public async getcombinedById(req: Request, res: Response): Promise<Response> {
    const combinedRepository = AppDataSource.getRepository(Combined);
    const combined = await combinedRepository.findOne({
      where: { id: req.params.id }
    });
    if (!combined) {
      return res.status(404).json({ message: 'combined not found' });
    }

    const combinedDto = combinedToDto(combined)
    return res.json(combinedDto);
  }

  public async updatecombined(req: Request, res: Response): Promise<Response> {
    const combinedRepository = AppDataSource.getRepository(Combined);
    const combined = await combinedRepository.findOne({ where: { id: req.params.id } });
    if (!combined) {
      return res.status(404).json({ message: 'combined not found' });
    }
    combinedRepository.merge(combined, req.body);
    const result = await combinedRepository.save(combined);
    return res.json(result);
  }

  public async patchcombined(req: Request, res: Response): Promise<Response> {
    try {
      const combinedRepository = AppDataSource.getRepository(Combined);
      const combined = await combinedRepository.findOne({ where: { id: req.params.id } });

      if (!combined) {
        return res.status(404).json({ message: 'Category not found' });
      }

      Object.keys(req.body).forEach((key) => {
        combined[key] = req.body[key];
      });

      const result = await combinedRepository.save(combined);
      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error to update' });
    }
  }

  public async deletecombined(req: Request, res: Response): Promise<Response> {
    const combinedRepository = AppDataSource.getRepository(Combined);
    const result = await combinedRepository.delete(req.params.id);
    if (result.affected === 0) {
      return res.status(404).json({ message: 'combined not found' });
    }
    return res.status(204).send();
  }
}
