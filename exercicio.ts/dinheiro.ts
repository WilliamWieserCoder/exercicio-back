import { metodoDePagamentos } from "./MetodoPagamento"

export class money implements metodoDePagamentos{
    pagar(){
        console.log('pagou em nota!')
    }
}