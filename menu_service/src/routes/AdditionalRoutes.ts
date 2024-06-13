import { Router } from 'express';
import { AdditionalController } from '../controllers/AddtionalController';

const router = Router();
const additionalController = new AdditionalController();

router.post('/api/additional', additionalController.createAdditional.bind(additionalController));
router.get('/api/additional', additionalController.getAdditionals.bind(additionalController));
router.get('/api/additional/:id', additionalController.getAdditionalById.bind(additionalController));
router.put('/api/additional/:id', additionalController.updateAdditional.bind(additionalController));
router.delete('/api/additional/:id', additionalController.deleteAdditional.bind(additionalController));

export default router;