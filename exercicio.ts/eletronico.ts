import { produto } from "./produto";

export class eletronico implements produto {
    bateria: number
    voltagem: number
    marca: string
    valorCusto: number
    nome: string

    constructor(bateria: number, voltagem: number, marca: string, valorCusto: number) {
        this.bateria = bateria
        this.voltagem = voltagem
        this.marca = marca
        this.valorCusto = valorCusto

    }

    CalcularValorTotal(): number {
        return this.valorCusto

    }
}