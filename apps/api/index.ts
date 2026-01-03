import express from "express"
import dotenv from "dotenv"
import { prismaClient } from "store/client"
dotenv.config()


const app = express();
const PORT = process.env.PORT ?? 3000


app.use(express.json())

app.post("/website", (req, res) => {

})

app.get("/status/:websiteId", (req, res) => {

})

app.listen(PORT, () => console.log(`App is runnig on PORT:${PORT}`))