import express from 'express'
import { countUsersAndRecipes } from '../controllers/count.controller.js'

const router = express.Router()

router.get("/", countUsersAndRecipes)

export default router