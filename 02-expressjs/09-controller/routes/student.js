import express from 'express'
import { allStudent } from '../controllers/studentController.js'

const router = express.Router()

router.get('/all', allStudent)

export default router