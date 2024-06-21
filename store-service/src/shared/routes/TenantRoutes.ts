import { Router } from 'express';
import { TenantController } from '../../controllers/TenantController';


const router = Router();

const tenantController = new TenantController();

router.post('/api/tenants', tenantController.createTenant.bind(tenantController));
router.get('/api/tenants', tenantController.getTenants.bind(tenantController));
router.get('/api/tenants/:id', tenantController.getTenantByRegister.bind(tenantController));
router.get('/api/tenants/:id', tenantController.getTenantById.bind(tenantController));
router.put('/api/tenants/:id', tenantController.updateTenant.bind(tenantController));
router.patch('/api/tenants/:id', tenantController.patchTenant.bind(tenantController));
router.delete('/api/tenants/:id', tenantController.deleteTenant.bind(tenantController));

export default router;