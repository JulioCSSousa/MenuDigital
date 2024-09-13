import { Router } from 'express';
import {
    CreateStoreController,
    GetStoreByIdController,
    GetStoreController,
    DeleteStoreController,
    PatchStoreController
} from '../../controllers/index';
import {storeValidation} from '../middleware/storeValidation'

const router = Router();

const getstore = new GetStoreController();
const getstorebyid = new GetStoreByIdController();
const patchstore = new PatchStoreController();
const delestore = new DeleteStoreController();
const createstore = new CreateStoreController();


router.post('/api/stores', storeValidation, createstore.createStore.bind(createstore));
router.get('/api/stores', getstore.getStores.bind(getstore));
router.get('/api/stores/:id', getstorebyid.getStoreById.bind(getstorebyid));
router.patch('/api/stores/:id', patchstore.patchStore.bind(patchstore));
router.delete('/api/stores/:id', delestore.deleteStore.bind(delestore));

export default router;