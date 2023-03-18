import serviceLivros from "../services/services.js";

class controller {
    static async mostraLivros(req, res) {
        const livros = await serviceLivros.getLivros()
        res.render("index", {livros: livros})
    }
}

export default controller