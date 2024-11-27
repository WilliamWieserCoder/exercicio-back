// Classe Pix implementando MetodosDePagamento
class Pix implements MetodosDePagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado via Pix.`);
    }
}
