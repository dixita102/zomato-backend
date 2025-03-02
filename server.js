import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


const app=express()
const port=5000


app.use(express.json())
app.use(cors())

connectDB();


app.use("/api/food",foodRouter)

app.get("/", (req, res) => {  
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started on :http://localhost:${port}`)
})

//mongodb+srv://sathwiksai:satwiksai@cluster0.tf9hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
