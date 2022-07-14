const productsCart = [
    {
        id: 1,
        name: "uva crimsom",
        price: 44.99 
    }, {
        id: 1,
        name: "vinho canção",
        price: 17.98
    }, {
        id: 1,
        name: "água de coco",
        price: 8.99
    }, {
        id: 1,
        name: "mamão",
        price: 9.98
    }, {
        id: 1,
        name: "água tônica",
        price: 17.98
    },]



let soma = 0
for (let i = 0; i < productsCart.length; i++) {
    soma = soma + productsCart[i].price
}





var botao = document.createElement("button")
const sec = document.createElement("section")
const body = document.body
const main = document.createElement("main")
const ul = document.createElement("ul")
body.appendChild(main)
main.appendChild(sec)
sec.appendChild(ul)
sec.appendChild(botao)

ul.classList = 'produtolista'
let lista = document.querySelector(".produtolista")

botao.innerText = 'finalizar compra'
botao.classList = 'botaum'

for (let i = 0; i < productsCart.length; i++) {
    produto= productsCart[i]
    preco = produto.price
    nome = produto.name 
    let li = document.createElement("li")
    li.innerText = `${nome} R$ ${preco}`
    lista.appendChild(li)
}















