import { Router } from "express";
import * as villagersCtrl from '../controllers/villagers.js'
const router = Router()


router.get('/', villagersCtrl.index)

export { router }