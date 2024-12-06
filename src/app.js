import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import exp from "constants"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({
    extended: true,  //we use extended to have objects inside objects
    limit: "16kb"
}))  

app.use(express.static("public"))

app.use(cookieParser())

export default app 