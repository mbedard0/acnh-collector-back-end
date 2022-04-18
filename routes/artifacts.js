import { Router } from "express";
import * as artifactsCtrl from '../controllers/artifacts.js'
const router = Router()


router.get('/fossils', artifactsCtrl.indexFossils)
router.get('/art', artifactsCtrl.indexArt)

export { router }