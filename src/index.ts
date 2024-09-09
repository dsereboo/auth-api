import express, {Application, Request, Response} from "express"
import dotenv from "dotenv"

dotenv.config()

const app:Application =express()
const port = process.env.PORT || 8000

app.get("/", (req:Request, res:Response)=>{
    res.send("Ts with node")
})
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
