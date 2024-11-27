// alimento.ts

import { produto } from "./produto";

export class alimento extends produto {
    constructor(nome: string, preco: number) {
        super(nome, preco);
    }

    CalcularValorTotal(): number {
        // Aplica uma taxa de 5% no preço do alimento
        const taxaAlimento = 0.05;
        return this.preco + (this.preco * taxaAlimento);
    }
}
