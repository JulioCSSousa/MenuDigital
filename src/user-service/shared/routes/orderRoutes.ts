import { Router } from 'express';
import {
    GetUsersController,
    GetUsersByIdController,
    CreateUsersController,
    PatchUsersController,
    DeleteUsersController
} from '../../controllers/index';
import { productValidation } from '../middleware/userValidation';


const router = Router();
const getUser = new GetUsersController();
const getUserById = new GetUsersByIdController();
const createUser = new CreateUsersController();
const patchUser = new PatchUsersController();
const deleteUser = new DeleteUsersController();

router.post('/api/orders', createUser.createUser.bind(createUser));
router.get('/api/orders', getUser.getUsers.bind(getUser));
router.get('/api/orders/:id', getUserById.getUserById.bind(getUserById));
router.patch('/api/orders/:id', patchUser.patchUser.bind(patchUser));
router.delete('/api/orders/:id', deleteUser.deleteUser.bind(deleteUser));

export default router;
