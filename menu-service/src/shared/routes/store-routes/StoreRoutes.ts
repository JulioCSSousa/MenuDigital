import { Router } from 'express';
import { StoreController } from '../../../controllers';


const router = Router();

const storeController = new StoreController();

router.post('/api/store', storeController.createStore.bind(storeController));
router.get('/api/store', storeController.getStores.bind(storeController));
router.get('/api/store/:id', storeController.getStoreByCnpj.bind(storeController));
router.put('/api/store/:id', storeController.updateStore.bind(storeController));
router.patch('/api/store/:id', storeController.patchStore.bind(storeController));
router.delete('/api/store/:id', storeController.deleteStore.bind(storeController));

export default router;