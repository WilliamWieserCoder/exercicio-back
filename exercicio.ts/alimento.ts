import { produto } from "./produto";

export class alimento implements produto {
    validade: number
    preço: number
    marca: string
    valorCusto: number
    taxa:number
    ingredientes: Array<string>
    nome: string

    constructor(validade: number, preço: number, marca: string, valorCusto: number , taxa:number, ingredientes: Array<string>) {
        this.validade = validade
        this.preço = preço
        this.marca = marca
        this.valorCusto = valorCusto
        this.taxa = taxa
        this.ingredientes = ingredientes

    }

    CalcularValorTotal(): number {
        return this.valorCusto * this.taxa

    }
}