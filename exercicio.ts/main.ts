import { livro } from "./livro";
import { alimento } from "./alimento";
import { produto } from "./produto";
import { eletronico } from "./eletronico";
import ask from "readline-sync"

let carrinho: Array<produto> = [];

function comprarProduto(produtoNovo: produto) {
    carrinho.push(produtoNovo);
}

function verCarrinho() {
    console.clear();
    if (carrinho.length === 0) {
        console.log("Carrinho está vazio!");
    } else {
        for (let produto of carrinho) {
            console.log(`${produto.nome}................. R$${produto.CalcularValorTotal().toFixed(2)}`);
        }
    }

    ask.question("Tecle enter para continuar...");
}

function pagarCarrinho(): void {
    if (carrinho.length === 0) {
        console.log("Carrinho vazio. Não é possível efetuar pagamento.");
        return;
    }

    let totalCompra = carrinho.reduce((total, produto) => total + produto.CalcularValorTotal(), 0);
    console.log(`Total da compra: R$${totalCompra.toFixed(2)}`);

    let pagamentoEfetuado = ask.question("Deseja efetuar o pagamento? (s/n): ");
    if (pagamentoEfetuado.toLowerCase() === 's') {
        console.log("Pagamento efetuado com sucesso!");
        carrinho = []; // Esvaziando o carrinho
    } else {
        console.log("Pagamento não realizado.");
    }
}

let sustentaMenu: boolean = true;

while (sustentaMenu) {
    console.clear();
    console.log(`
    [1] - Comprar Produto
    [2] - Ver Carrinho
    [3] - Efetuar Pagamento
    [4] - Sair
    `);

    let opcaoUsuario = Number(ask.question("Digite uma opção: "));

    switch (opcaoUsuario) {
        case 1:
            // Comprar produto
            console.clear();
            console.log("Escolha um produto para comprar:");
            console.log("[1] - Livro");
            console.log("[2] - Alimento");
            console.log("[3] - Eletrônico");

            let opcaoProduto = Number(ask.question("Escolha o número do produto: "));

            let produtoEscolhido: produto;

            switch (opcaoProduto) {
                case 1:
                    let nomeLivro = ask.question("Digite o nome do livro: ");
                    let precoLivro = parseFloat(ask.question("Digite o preço do livro: "));
                    produtoEscolhido = new livro(nomeLivro, precoLivro);
                    break;
                case 2:
                    let nomeAlimento = ask.question("Digite o nome do alimento: ");
                    let precoAlimento = parseFloat(ask.question("Digite o preço do alimento: "));
                    produtoEscolhido = new alimento(nomeAlimento, precoAlimento);
                    break;
                case 3:
                    let nomeEletronico = ask.question("Digite o nome do eletrônico: ");
                    let precoEletronico = parseFloat(ask.question("Digite o preço do eletrônico: "));
                    produtoEscolhido = new eletronico(nomeEletronico, precoEletronico);
                    break;
                default:
                    console.log("Produto inválido.");
                    continue;
            }

            comprarProduto(produtoEscolhido);
            break;

        case 2:
            // Ver carrinho
            verCarrinho();
            break;

        case 3:
            // Efetuar pagamento
            pagarCarrinho();
            break;

        case 4:
            // Sair
            console.log("Saindo do sistema...");
            sustentaMenu = false;
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
