import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();
const productController = new ProductController();

router.post('/products', productController.createProduct.bind(productController));
router.get('/products', productController.getProducts.bind(productController));
router.get('/products/:id', productController.getProductById.bind(productController));
router.put('/products/:id', productController.updateProduct.bind(productController));
router.delete('/products/:id', productController.deleteProduct.bind(productController));

export default router;
