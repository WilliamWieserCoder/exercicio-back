"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro = void 0;
var livro = /** @class */ (function () {
    function livro(capa, autor, titulo, valorCusto, comissaoAutor) {
        this.capa = capa;
        this.autor = autor;
        this.titulo = titulo;
        this.valorCusto = valorCusto;
        this.comissaoAutor = comissaoAutor;
    }
    livro.prototype.CalcularValorTotal = function () {
        return this.valorCusto + this.comissaoAutor;
    };
    return livro;
}());
exports.livro = livro;
