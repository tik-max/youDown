import express from 'express'

import { analyzeVideo } from '../controllers/downloadController.js'

const router = express.Router()

router.post('/analyze', analyzeVideo)

export default router
