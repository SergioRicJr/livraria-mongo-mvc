import livros from '../model/Livro.js'

class serviceLivros {
    static async getLivros() {
        const todosLivros = await livros.find()
        return todosLivros
    }
}

export default serviceLivros