import { Router } from "express";
import * as listsCtrl from '../controllers/lists.js'
import { checkAuth } from '../middleware/auth.js'
const router = Router()

router.post('/', checkAuth, listsCtrl.create)


export { router }