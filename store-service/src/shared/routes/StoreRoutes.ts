import { Router } from 'express';
import { StoreController } from '../../controllers/StoreController';
import {storeValidation} from '../middleware/storeValidation'

const router = Router();

const storeController = new StoreController();

router.post('/api/stores', storeValidation,storeController.createStore.bind(storeController));
router.get('/api/stores', storeController.getStores.bind(storeController));
router.get('/api/stores/:id', storeController.getStoreById.bind(storeController));
router.put('/api/stores/:id', storeController.updateStore.bind(storeController));
router.patch('/api/stores/:id', storeController.patchStore.bind(storeController));
router.delete('/api/stores/:id', storeController.deleteStore.bind(storeController));

export default router;