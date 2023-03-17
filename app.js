import express from 'express'
import router from './routes/routes.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.set("view engine", "ejs")
app.set("views", "./view")

app.use(router, express.json(), express.static("public"))

app.listen(PORT,()=>{
    console.log(`O servidor está ouvindo em http://localhost:${PORT}`)
})