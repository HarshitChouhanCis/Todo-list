import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" // apane server se user se browser ke cookies ko accept kr aayeconst app = express()

const app = express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}))
app.use(express.json())

import userRouter from './routes/user.routes.js'
app.use("/api/v1/users", userRouter)

export{app}