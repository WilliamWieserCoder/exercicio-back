import { metodoDePagamentos } from "./MetodoPagamento"
export class pix implements metodoDePagamentos{
    pagar(){
        console.log('pagou em pix!')
    }
}