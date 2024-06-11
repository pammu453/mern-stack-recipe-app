import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import connectDB from './config/db.js'

import userRouter from './routes/user.route.js'
import recipeRouter from './routes/recipe.route.js'
import countRouter from './routes/count.route.js'

import path from "path"

const app = express()
const port = 5000
const __dirname = path.resolve()

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter)
app.use("/api/recipe", recipeRouter)
app.use("/api/count", countRouter)

app.use(express.static(path.join(__dirname,'/client/build')));

// Catch all other routes and return the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'client', 'build', 'index.html'));
});

connectDB()

app.listen(port, () => console.log(`Server running on port ${port}`))