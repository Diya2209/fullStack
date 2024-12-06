import express from "express"
import cors from "cros";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit : "16kb"}))

app.use(express.urlencoded())
app.use(express.static)
app.use(cookieParser( ))

export default app;