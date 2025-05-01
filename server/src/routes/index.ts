import { Router } from 'express';
import reportRrouter from './report';

const router = Router();

router.use('/reports', reportRrouter);

export default router;