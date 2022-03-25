import { Router } from "express";
import * as listsCtrl from '../controllers/lists.js'
import { checkAuth } from '../middleware/auth.js'
const router = Router()

router.post('/', listsCtrl.create)
router.get('/:id', listsCtrl.index)

export { router }