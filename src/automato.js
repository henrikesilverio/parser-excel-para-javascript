'use strict'

function automato(alfabeto, cadeia) {
    var cursor = 0;
    var linha = 0;
    var coluna = 0;
    var estado = { "proximoEstado": 0 };
    var simbolo;
    var palavra = "";

    while (estado.proximoEstado !== null) {
        linha = estado.proximoEstado;
        coluna = 0;
        estado = alfabeto[linha][coluna++];
        simbolo = cadeia[cursor] === undefined ? "" : cadeia[cursor];
        while (estado != undefined && !estado.padrao.test(simbolo)) {
            estado = alfabeto[linha][coluna++];
        }
        palavra += cadeia[cursor];
        if (estado === undefined) {
            estado = linha === 0
                ? { "proximoEstado": 0 }
                : alfabeto[--linha][0];
            break;
        }
        if (estado.retroceder) {
            cursor--;
            palavra = palavra.substring(0, palavra.length - 1);
        }
        cursor++;
    }
    return {
        "cursor": cursor,
        "palavra": palavra,
        "estaValido": estado.proximoEstado === null
    };
}

module.exports = automato;