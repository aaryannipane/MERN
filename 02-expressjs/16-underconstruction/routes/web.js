import express from 'express'
import { homeController } from '../controllers/homeController.js'
import { aboutController } from '../controllers/aboutController.js'

const router = express.Router()

router.get('/', homeController)
router.get('/about', aboutController)

export default router