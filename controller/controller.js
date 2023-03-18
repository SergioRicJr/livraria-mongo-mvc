import Services from "../services/services.js"

class Controller {
    static async mostraLivros(req, res) {
        try {
            const livros = await Services.getLivros()
            res.render("index", {livros: livros})
        } catch(err) {
            res.status(500).send(err.message)
        }
    }

    static async deletaLivro(req, res) {
        try {
            const idLivro = req.params.id
            const livroDeletado = await Services.removeLivro(idLivro)
            res.send(`Livro ${livroDeletado.titulo} deletado com sucesso`)
        } catch(err) {
            res.status(422).send(err.message)
        }
    }

    static async adicionarLivro(req, res) {
        const infoLivro = req.body
        const adicLivroStatus = await Services.adicionarNovoLivro(infoLivro)
        if (adicLivroStatus.status) {
            res.status(201).send(adicLivroStatus.message)
        } else {
            res.status(422).send(adicLivroStatus.message)
        }
    }
}   

export default Controller