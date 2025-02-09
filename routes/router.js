import { Router } from 'express'
const router = Router()
import { yes, no } from '../controller/script.js'

router.get('/yes', yes)
router.get('/no', no)


export default router