import { Router } from "express";
import * as creaturesCtrl from '../controllers/creatures.js'
const router = Router()


router.get('/', creaturesCtrl.indexFish)

export { router }