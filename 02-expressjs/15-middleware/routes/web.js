import express from 'express'
import { homeController } from '../controllers/homeController.js'
import { aboutController } from '../controllers/aboutController.js'
import mylogger from '../middlewares/logger-middleware.js'

const router = express.Router()

// router level middleware
router.use('/about', mylogger)

router.get('/', homeController)
router.get('/about', aboutController)


export default router