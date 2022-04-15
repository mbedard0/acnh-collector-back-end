import { Router } from 'express'
const router = Router()

import * as furnitureCtrl from '../controllers/furniture.js'

router.get('/', furnitureCtrl.index)

export {
  router
}