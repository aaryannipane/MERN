import express from 'express'
import { studentAll } from '../controllers/studentController.js'

const router = express.Router()

router.get('/all', studentAll)

export default router