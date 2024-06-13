import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { SizeInfo } from '../entity/SizeInfo';

export class SizeInfoController {
  public async createSize(req: Request, res: Response): Promise<Response> {
    const sizeInfoRepository = AppDataSource.getRepository(SizeInfo);
    const newSizeInfo = sizeInfoRepository.create(req.body);
    await sizeInfoRepository.save(newSizeInfo);
    return res.json(newSizeInfo);
  }

  public async getSize(req: Request, res: Response): Promise<Response> {
    const sizeInfoRepository = AppDataSource.getRepository(SizeInfo);
    const sizeInfos = await sizeInfoRepository.find({ relations: ["product"] });
    return res.json(sizeInfos);
  }

  public async getSizeById(req: Request, res: Response): Promise<Response> {
    const sizeInfoRepository = AppDataSource.getRepository(SizeInfo);
    const sizeInfo = await sizeInfoRepository.findOne({
      where: { itemSizeId: Number(req.params.id) },
      relations: ["product"]
    });
    if (!sizeInfo) {
      return res.status(404).json({ message: 'SizeInfo not found' });
    }
    return res.json(sizeInfo);
  }

  public async updateSize(req: Request, res: Response): Promise<Response> {
    const sizeInfoRepository = AppDataSource.getRepository(SizeInfo);
    let sizeInfo = await sizeInfoRepository.findOne({ where: { itemSizeId: Number(req.params.id) } });
    if (!sizeInfo) {
      return res.status(404).json({ message: 'SizeInfo not found' });
    }
    sizeInfoRepository.merge(sizeInfo, req.body);
    const result = await sizeInfoRepository.save(sizeInfo);
    return res.json(result);
  }

  public async deleteSize(req: Request, res: Response): Promise<Response> {
    const sizeInfoRepository = AppDataSource.getRepository(SizeInfo);
    const result = await sizeInfoRepository.delete(req.params.id);
    if (result.affected === 0) {
      return res.status(404).json({ message: 'SizeInfo not found' });
    }
    return res.status(204).send();
  }
}
