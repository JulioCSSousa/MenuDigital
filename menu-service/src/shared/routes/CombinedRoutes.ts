import { Router } from 'express';
import { CombinedController } from '../../controllers/CombinedController';
import { combinedValidation } from '../middleware/combinedValidation';


const router = Router();
const combinedController = new CombinedController();

router.post('/api/combined', combinedValidation,combinedController.createcombined.bind(combinedController));
router.get('/api/combined', combinedController.getcombineds.bind(combinedController));
router.get('/api/combined/:id', combinedController.getcombinedById.bind(combinedController));
router.put('/api/combined/:id', combinedController.updatecombined.bind(combinedController));
router.patch('/api/combined/:id', combinedController.patchcombined.bind(combinedController));
router.delete('/api/combined/:id', combinedController.deletecombined.bind(combinedController));

export default router;