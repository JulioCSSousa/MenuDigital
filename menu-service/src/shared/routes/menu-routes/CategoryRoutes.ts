import { Router } from 'express';
import { CategoryController } from '../../../controllers/menu-controllers/CategoryController';



const router = Router();
const categoryController = new CategoryController();

router.post('/api/category', categoryController.createCategory.bind(categoryController));
router.get('/api/category', categoryController.getCategories.bind(categoryController));
router.get('/api/category/:id', categoryController.getCategoryById.bind(categoryController));
router.put('/api/category/:id', categoryController.updateCategory.bind(categoryController));
router.patch('/api/categories/:id', categoryController.patchCategory.bind(categoryController));
router.delete('/api/category/:id', categoryController.deleteCategory.bind(categoryController));

export default router;