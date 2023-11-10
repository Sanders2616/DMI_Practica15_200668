import express from "express";
import playerRoutes from "./routes/playerRoutes.js" 

const api = new express()
const port = 20068

api.use("/players", playerRoutes)
api.listen(port,() =>{
    console.log(`El api  ha sido iniciada y se encuentra escuchando en el puerto: ${port}`)
})