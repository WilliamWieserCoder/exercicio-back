// livro.ts

import { produto } from "./produto";

export class livro extends produto {
    constructor(nome: string, preco: number) {
        super(nome, preco);
    }

    CalcularValorTotal(): number {
        // Para o livro, o preço é o mesmo sem modificações
        return this.preco;
    }
}
