// Classe CartaoDeCredito implementando MetodosDePagamento
class CartaoDeCredito implements MetodosDePagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado com Cartão de Crédito.`);
    }
}
