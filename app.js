import express from 'express'
import router from './routes/routes.js'
import dotenv from 'dotenv'
import db from './entity/configDB.js'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", ()=>{
    console.log("conexão com banco feita com sucesso")
})

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.set("view engine", "ejs")
app.set("views", "./view")

app.use(express.json(), router, express.static("public"))
//express.json() Sempre antes do router

app.listen(PORT,()=>{
    console.log(`O servidor está ouvindo em http://localhost:${PORT}`)
})