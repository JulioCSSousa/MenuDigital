import { Router } from 'express';
import {
    GetProductsController,
    GetProductsByIdController,
    CreateProductsController,
    PatchProductsController,
    DeleteProductsController
} from '../../controllers/index';
import { productValidation } from '../middleware/productValidation';


const router = Router();
const getProduct = new GetProductsController();
const getProductById = new GetProductsByIdController();
const createProduct = new CreateProductsController();
const patchProduct = new PatchProductsController();
const deleteProduct = new DeleteProductsController();

router.post('/api/products', productValidation, createProduct.createProduct.bind(createProduct));
router.get('/api/products', getProduct.getProducts.bind(getProduct));
router.get('/api/products/:id', getProductById.getProductById.bind(getProductById));
router.patch('/api/products/:id', patchProduct.patchProduct.bind(patchProduct));
router.delete('/api/products/:id', deleteProduct.deleteProduct.bind(deleteProduct));

export default router;
