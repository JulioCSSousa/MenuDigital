import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Product } from '../entity/Product';
import { Category } from '../entity/Category';


export class ProductController {
  public async createProduct(req: Request, res: Response): Promise<Response> {
    const productRepository = AppDataSource.getRepository(Product);
    const newProduct = productRepository.create(req.body);
    await productRepository.save(newProduct);
    return res.json(newProduct);
}

  async getProducts(req: Request, res: Response): Promise<Response> {
    const productRepository = AppDataSource.getRepository(Product);
    const products = await productRepository.find({relations: ["category", "size", "additional"]});
    return res.json(products);
  }

  async getProductById(req: Request, res: Response): Promise<Response> {
    const productRepository = AppDataSource.getRepository(Product);
    const product = await productRepository.findOne({where: {id: req.params.id}, 
      relations: ["category", "size", "additional"]});
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(product);
  }

  async getProductByCategory(req: Request, res: Response): Promise<Response> {
    const categoryId = Number(req.params.id)
    const productRepository = AppDataSource.getRepository(Product);
    const product = await productRepository.find({where: {category: {id: categoryId}}, 
      relations: ["category", "size", "additional"]});
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(product);
  }

  async updateProduct(req: Request, res: Response): Promise<Response> {
    const productRepository = AppDataSource.getRepository(Product);
    let product = await productRepository.findOne({where: {id: req.params.id}});
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    productRepository.merge(product, req.body);
    const result = await productRepository.save(product);
    return res.json(result);
  }

  async deleteProduct(req: Request, res: Response): Promise<Response> {
    const productRepository = AppDataSource.getRepository(Product);
    const result = await productRepository.delete(req.params.id);
    if (result.affected === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(204).send();
  }
}
