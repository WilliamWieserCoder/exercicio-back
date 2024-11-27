// eletronico.ts

import { produto } from "./produto";

export class eletronico extends produto {
    constructor(nome: string, preco: number) {
        super(nome, preco);
    }

    CalcularValorTotal(): number {
        // Aplica uma taxa de 10% no preço do eletrônico
        const taxaEletronico = 0.10;
        return this.preco + (this.preco * taxaEletronico);
    }
}
