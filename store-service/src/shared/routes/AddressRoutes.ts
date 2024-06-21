import { Router } from 'express';
import { AddressController } from '../../controllers/AddressController';


const router = Router();

const addressController = new AddressController();

router.post('/api/address', addressController.createAddress.bind(addressController));
router.get('/api/address', addressController.getAddress.bind(addressController));
router.get('/api/address/:id', addressController.getAddressById.bind(addressController));
router.put('/api/address/:id', addressController.updateAddress.bind(addressController));
router.patch('/api/address/:id', addressController.patchAddress.bind(addressController));
router.delete('/api/address/:id', addressController.deleteAddress.bind(addressController));

export default router;