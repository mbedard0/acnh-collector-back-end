import { Router } from "express";
import * as creaturesCtrl from '../controllers/creatures.js'
const router = Router()

router.get('/fish', creaturesCtrl.indexFish)
router.get('/bugs', creaturesCtrl.indexBugs)
router.get('/sea', creaturesCtrl.indexSea)

export { router }