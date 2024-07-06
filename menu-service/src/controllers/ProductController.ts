import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Product } from '../entity/Product';
import { Repository } from 'typeorm';

export class ProductController {
  
  public async createProduct(req: Request, res: Response): Promise<Response> {
    const productRepository = AppDataSource.getRepository(Product);
    let newProduct: any
    try{

    newProduct = productRepository.create(req.body);
    await productRepository.save(newProduct);
    }
    catch(exception){
      return res.status(500).json("something went wrong: " + exception)
    }
    return res.json(newProduct);
  }


public async getProducts(req: Request, res: Response): Promise<Response> {
  const productRepository = AppDataSource.getRepository(Product);

  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 10;
  const offset = (page - 1) * limit; 
  let [product, total]: any = [productRepository];

  const main = req.query.main;
  let queryparam = null;
  if (main){
    queryparam = main === 'true';
  }
  if (main){
      [product, total] = await productRepository.findAndCount({
      relations: ["combined"],
      where: {combined: {mainMenu: queryparam}},
      skip: offset,
      take: limit
      
    });
  } else{
    [product, total] = await productRepository.findAndCount({
      relations: ["combined"],
      skip: offset,
      take: limit

    });
}

  product.forEach(product => {
    if (product.combined) {
        product.combined.forEach(combined => delete combined.id);
    }
});
    const totalPages = Math.ceil(total / limit);

    return res.json({
      data: product,
      
      meta: {
        total,
        page,
        limit,
        totalPages,
        main
      }
    });
  }


public async getProductById(req: Request, res: Response): Promise < Response > {
  const productRepository = AppDataSource.getRepository(Product);
  const product = await productRepository.findOne({
    where: { id: req.params.id },
    relations: ["combined"]
  });
  if(!product) {
    return res.status(404).json({ message: 'Product not found' });
    }

  if (product.combined) {
    product.combined.forEach(combined => delete combined.id);
  }

  return res.json(product);
  }


async updateProduct(req: Request, res: Response): Promise < Response > {
const productRepository = AppDataSource.getRepository(Product);
const product = await productRepository.findOne({ where: { id: req.params.id } });
if(!product) {
  return res.status(404).json({ message: 'Product not found' });
}
  productRepository.merge(product, req.body);
const result = await productRepository.save(product);
return res.json(result);
}

public async patchProduct(req: Request, res: Response): Promise < Response > {
try {
  const productRepository = AppDataSource.getRepository(Product);
  const product = await productRepository.findOne({ where: { id: req.params.id }, relations: ["category", "combined"] });

  if(!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

    Object.keys(req.body).forEach((key) => {
    product[key] = req.body[key];
  });

  const result = await productRepository.save(product);
  return res.json(result);

} catch(error) {
  console.error(error);
  return res.status(500).json({ error: 'error to update product' });
}
}

async deleteProduct(req: Request, res: Response): Promise < Response > {
const productRepository = AppDataSource.getRepository(Product);
const result = await productRepository.delete(req.params.id);
if(result.affected === 0) {
return res.status(404).json({ message: 'Product not found' });
}
return res.status(204).send("Deleted");
}
}
