import express from 'express'
import Controller from '../controller/controller.js'

const router = express.Router()

router 
    .get("/", Controller.mostraLivros)
    .delete("/:id", Controller.deletaLivro)
    .post("/livro", Controller.adicionarLivro)
    // .post("/adicionar", Controller.acicionarLivro)

export default router