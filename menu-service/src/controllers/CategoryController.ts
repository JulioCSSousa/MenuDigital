import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Category } from '../entity/Category';

export class CategoryController {
    public async createCategory(req: Request, res: Response): Promise<Response> {
        const categoryRepository = AppDataSource.getRepository(Category);
        const newCategory = categoryRepository.create(req.body);
        await categoryRepository.save(newCategory);
        return res.json(newCategory);
    }

    public async getCategories(req: Request, res: Response): Promise<Response> {
        const categoryRepository = AppDataSource.getRepository(Category);
        const categories = await categoryRepository.find({ relations: ["product"] });
        return res.json(categories);
    }

    public async getCategoryById(req: Request, res: Response): Promise<Response> {

        const categoryRepository = AppDataSource.getRepository(Category);
        let category = await categoryRepository.findOne({ where: { id: Number(req.params.id) } });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.json(category);
    }

    public async updateCategory(req: Request, res: Response): Promise<Response> {

        const categoryRepository = AppDataSource.getRepository(Category);
        let category = await categoryRepository.findOne({ where: { id: Number(req.params.id) } });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        categoryRepository.merge(category, req.body);
        const result = await categoryRepository.save(category);
        return res.json(result);
    }

    public async patchCategory(req: Request, res: Response): Promise<Response> {
        try {
            const categoryRepository = AppDataSource.getRepository(Category);
            const category = await categoryRepository.findOne({ where: { id: Number(req.params.id) } });

            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }

            Object.keys(req.body).forEach((key) => {
                category[key] = req.body[key];
            });

            const result = await categoryRepository.save(category);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error to update category' });
        }
    }

    public async deleteCategory(req: Request, res: Response): Promise<Response> {
        const categoryRepository = AppDataSource.getRepository(Category);
        const result = await categoryRepository.delete(Number(req.params.id));
        if (result.affected === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.status(204).send();
    }
}
