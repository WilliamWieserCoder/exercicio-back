// produto.ts

export class produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    CalcularValorTotal(): number {
        // Este método será sobrescrito nas classes filhas
        return this.preco;
    }
}
