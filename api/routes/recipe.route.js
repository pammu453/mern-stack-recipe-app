import express from 'express'
import varifyToken from '../middleware/auth.js'
import {
    getRecipes,
    addRecipe,
    viewRecipe,
    purchaseCoins,
    getRecipesBySuggestions
} from '../controllers/recipe.controller.js'

const router = express.Router()

router.get("/getAllRecipes", getRecipes)
router.get("/suggestions/:recipeId", getRecipesBySuggestions)
router.post("/add", varifyToken, addRecipe)
router.get("/view/:id", varifyToken, viewRecipe)
router.post("/coins/purchase", varifyToken, purchaseCoins)

export default router