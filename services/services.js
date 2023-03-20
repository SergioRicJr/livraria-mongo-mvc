import livro from '../models/modelLivro.js'

class Services {
    static async getLivros(){
        try {
            const livros = await livro.find()
            return livros
        } catch(err) {
            console.log(err.message)
        }
    }

    static async removeLivro(idLivro) {
        try {
            const livroDeletado = await livro.findByIdAndRemove(idLivro)
            return livroDeletado
        } catch(err) {
            console.log(err.message)
        }
    }

    static async adicionarNovoLivro(infoLivro) {
        try {
            const newLivro = new livro(infoLivro)
            await newLivro.save()
            return {status: true, message: "Livro adicionado com sucesso"}
        } catch(err) {
            return {status: false, message: err.message}
        }
    }
}

export default Services