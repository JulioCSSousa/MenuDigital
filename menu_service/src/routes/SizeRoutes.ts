import { Router } from 'express';
import { SizeInfoController } from '../controllers/SizeController';

const router = Router();
const sizeInfoController = new SizeInfoController();

router.post('/api/size', sizeInfoController.createSize.bind(sizeInfoController));
router.get('/api/size', sizeInfoController.getSize.bind(sizeInfoController));
router.get('/api/size/:id', sizeInfoController.getSizeById.bind(sizeInfoController));
router.put('/api/size/:id', sizeInfoController.updateSize.bind(sizeInfoController));
router.patch('/api/size/:id', sizeInfoController.patchSize.bind(sizeInfoController));
router.delete('/api/size/:id', sizeInfoController.deleteSize.bind(sizeInfoController));

export default router;