const btnMenu = document.querySelector(".menu-fechado")
const menuLateral = document.querySelector("#menu-lateral-adicionar")
import conexaoApi from "./conectaApi.js"


btnMenu.addEventListener("click", ()=>{
    menuLateral.classList.toggle("hide")
})

var btn = document.querySelector("#button-adicionar-livro")
var select = document.querySelector("#genero-input-menu")
var inputTitulo = document.querySelector("#titulo-input-menu")
var inputAutor = document.querySelector("#autor-input-menu")
const inputLinkImg = document.querySelector("#input-link-imagem")

btn.addEventListener("click", async ()=>{
    var titulo = inputTitulo.value
    var autor = inputAutor.value
    var genero = select[select.selectedIndex].value
    var img = inputLinkImg.value
    // const tokenGuardad = JSON.parse(localStorage.getItem("authorization"))
    conexaoApi.adicionaLivroApi(titulo, autor, genero, img)
    window.location.reload()
    // reiniciarLivrosSite() //substituir esse metodo por append de livro na area de livro
})