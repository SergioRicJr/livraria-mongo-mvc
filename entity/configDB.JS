import mongoose from "mongoose";
//conectando com banco local no momento
mongoose.connect("mongodb://127.0.0.1:27017/Livraria")
//usar endereco ip ao inves de localhost
const db = mongoose.connection


export default db