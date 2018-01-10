'use strict'

const automato = require('./automato');

var alfabeto = [
    [
        { "padrao": /^\)$/, "proximoEstado": null },
        { "padrao": /^\($/, "proximoEstado": null }
    ]
];

function simbolo(cadeia) {
    return automato(alfabeto, cadeia);
}

module.exports = simbolo;