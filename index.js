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





var botao = document.createElement("input")
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




botao.value = 'finalizar compra'
botao.type = 'button'
botao.classList = 'botaum'
console.log(botao)

let titulo = document.createElement("li")
let hh2 =document.createElement("h2")
hh2.classList.add("h2lista")
hh2.innerText = "item"
let sspam = document.createElement("spam")
sspam.classList.add("spamlista")
sspam.innerText = "Valor"
titulo.appendChild(hh2)
titulo.appendChild(sspam)
ul.appendChild(titulo)
titulo.classList.add("lisprodutos")

for (let i = 0; i < productsCart.length; i++) {
    produto= productsCart[i]
    preco = produto.price
    nome = produto.name 
    let li = document.createElement("li")
    li.classList.add("lisprodutos")
    let h2 =document.createElement("h2")
    let spam = document.createElement("spam")
    h2.classList.add("h2lista")
    spam.classList.add("spamlista")
    h2.innerText = nome
    spam.innerText = preco
    li.appendChild(h2)
    li.appendChild(spam)
    ul.appendChild(li)
}

let total = document.createElement("li")
total.classList.add("lisprodutos")
ul.appendChild(total)
let textotal = document.createElement("h2")
textotal.innerText = "Total"
textotal.classList.add("h2lista")
total.appendChild(textotal)
let somatotal = document.createElement("spam")
somatotal.classList.add("spamlista")
somatotal.innerText = `R$${soma}`
total.appendChild(somatotal)















