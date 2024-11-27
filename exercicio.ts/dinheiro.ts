
// Classe Dinheiro implementando MetodosDePagamento
class Dinheiro implements MetodosDePagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado em Dinheiro.`);
    }
}