import { metodoDePagamentos } from "./MetodoPagamento"

export class cartaoCredito implements metodoDePagamentos{
    pagar(){
        console.log('pagou em cartão de crédito!')
    }
}