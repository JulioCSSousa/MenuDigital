import { Router } from 'express';
import { StoreController } from '../../controllers/StoreController';


const router = Router();

const storeController = new StoreController();

router.post('/api/stores', storeController.createStore.bind(storeController));
router.get('/api/stores', storeController.getStores.bind(storeController));
router.get('/api/stores/:id', storeController.getStoreById.bind(storeController));
router.put('/api/stores/:id', storeController.updateStore.bind(storeController));
router.patch('/api/stores/:id', storeController.patchStore.bind(storeController));
router.delete('/api/stores/:id', storeController.deleteStore.bind(storeController));

export default router;