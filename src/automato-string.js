'use strict'

var alfabeto = [
    [
        { "padrao": /^\"$/, "proximoEstado": 1 },
        { "padrao": /^\'$/, "proximoEstado": 2 }
    ],
    [
        { "padrao": /[^\"]+/, "proximoEstado": 1 },
        { "padrao": /^\"$/, "proximoEstado": null }
    ],
    [
        { "padrao": /[^\']+/, "proximoEstado": 2 },
        { "padrao": /^\'$/, "proximoEstado": null }
    ]
];

function automato(cadeia) {
    var indice = 0;
    var linha = 0;
    var coluna = 0;
    var estado = { "proximoEstado": 0 };
    var simbolo;

    while (estado.proximoEstado !== null) {
        linha = estado.proximoEstado;
        coluna = 0;
        estado = alfabeto[linha][coluna++];
        simbolo = cadeia[indice] === undefined ? "" : cadeia[indice++];
        while (estado != undefined && !estado.padrao.test(simbolo)) {
            estado = alfabeto[linha][coluna++];
        }
        if (estado === undefined) {
            estado = alfabeto[linha][0];
            break;
        }
    }
    return estado.proximoEstado === null
        ? "Cadeia aceita!"
        : "Cadeia não aceita!";
}

module.exports = automato;