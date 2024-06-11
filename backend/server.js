import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import connectDB from './config/db.js'

import userRouter from './routes/user.route.js'
import recipeRouter from './routes/recipe.route.js'
import countRouter from './routes/count.route.js'

const app = express()
const port = 5000

app.use(express.json());
app.use(cors());


app.use("/api/user", userRouter)
app.use("/api/recipe", recipeRouter)
app.use("/api/count", countRouter)

connectDB()

app.listen(port, () => console.log(`Server running on port ${port}`))