import { produto } from "./produto";

export class livro implements produto{
    capa: string
    autor: string
    nome: string
    valorCusto: number
    comissaoAutor: number
    

    constructor(capa:string , autor:string, nome:string , valorCusto: number, comissaoAutor: number ) {
        this.capa=capa
        this.autor=autor
        this.nome=nome
        this.valorCusto=valorCusto
        this.comissaoAutor=comissaoAutor
    }
    
    CalcularValorTotal(): number {
        return this.valorCusto + this.comissaoAutor
        
    }
}