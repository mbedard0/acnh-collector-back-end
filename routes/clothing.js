import { Router } from "express";
const router = Router()

import * as clothingCtrl from '../controllers/clothing.js'

router.get('/', clothingCtrl.index)

export {
  router
}