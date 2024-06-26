import { Router } from 'express';
import { ProductController } from '../../controllers/ProductController';
import { productValidation } from '../middleware/productValidation';


const router = Router();
const productController = new ProductController();

router.post('/api/product', productValidation, productController.createProduct.bind(productController));
router.get('/api/product', productController.getProducts.bind(productController));
router.get('/api/product/:id', productController.getProductById.bind(productController));
router.put('/api/product/:id', productController.updateProduct.bind(productController));
router.patch('/api/product/:id', productController.patchProduct.bind(productController));
router.delete('/api/product/:id', productController.deleteProduct.bind(productController));

export default router;
