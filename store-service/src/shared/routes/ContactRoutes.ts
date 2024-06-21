import { Router } from 'express';
import { ContactController } from '../../controllers/ContactController'


const router = Router();

const contactController = new ContactController();

router.post('/api/contacts', contactController.createContact.bind(contactController));
router.get('/api/contacts', contactController.getContacts.bind(contactController));
router.get('/api/contacts/:id', contactController.getContactById.bind(contactController));
router.put('/api/contacts/:id', contactController.updateContact.bind(contactController));
router.patch('/api/contacts/:id', contactController.patchContact.bind(contactController));
router.delete('/api/contacts/:id', contactController.deleteContact.bind(contactController));

export default router;