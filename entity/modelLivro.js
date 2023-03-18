import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    "id":{type: String},
    "titulo": {type: String, required: true},
    "autor": {type: String, required: true},
    "genero": {type: String, required: true},
    "img": {type: String}
})

const livro = mongoose.model("livros", livroSchema)

export default livro