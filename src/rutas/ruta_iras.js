import {Router} from 'express'
import { get_iras, get_iras_micro } from '../controladores/ctrl_iras.js';
const router=Router();

router.get('/iras',get_iras);
router.get('/iras_micro/:cod_mic',get_iras_micro);
export default router;