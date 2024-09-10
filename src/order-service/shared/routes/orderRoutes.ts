import { Router } from 'express';
import {
    GetOrdersController,
    GetOrdersByIdController,
    CreateOrdersController,
    PatchOrdersController,
    DeleteOrdersController
} from '../../controllers/index';
import { orderValidation } from '../middleware/orderValidation';


const router = Router();
const getOrder = new GetOrdersController();
const getOrderById = new GetOrdersByIdController();
const createOrder = new CreateOrdersController();
const patchOrder = new PatchOrdersController();
const deleteOrder = new DeleteOrdersController();

router.post('/api/orders', createOrder.createOrder.bind(createOrder));
router.get('/api/orders', getOrder.getOrders.bind(getOrder));
router.get('/api/orders/:id', getOrderById.getOrderById.bind(getOrderById));
router.patch('/api/orders/:id', patchOrder.patchOrder.bind(patchOrder));
router.delete('/api/orders/:id', deleteOrder.deleteOrder.bind(deleteOrder));

export default router;
