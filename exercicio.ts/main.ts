import { livro } from "./livro";
import { alimento } from "./alimento";
import { produto } from "./produto";
import { eletronico } from "./eletronico";
import ask from "readline-sync"

let carrinho: Array<produto>

function comprarProduto(produtoNovo: produto) {
    carrinho.push(produtoNovo)
}

function verCarrinho() {
    console.clear()
    for (let produto of carrinho) {
        console.log(`${produto.nome}................. ${produto.CalcularValorTotal()}`)
    }

    ask.question("tecle enter pra contiuar...")

}

function pagarCarrinho(): void {

    console.log("pagamento efetuado, carrinho vazio")
    carrinho = []
}

let sustentaMenu: boolean = true

while (sustentaMenu) {
    console.clear()
    console.log(`
    [1] - comprar produto
    [2] - ver carrinho
    [3] - efetuar pagamento
    [4] - sair
    
    `)

    let opcaoUsuario = Number(ask.question("digite uma opção:"))

    switch (opcaoUsuario) {
        case 1:
            //comprar produto 
            break
        case 2:
            //ver carrinho
            break
        case 3:
            //efetuar pagamento
            break
        case 4:
            //sair      
            break  

    }
}