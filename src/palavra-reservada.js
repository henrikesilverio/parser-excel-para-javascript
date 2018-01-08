'use strict'

const automato = require('./automato');

var alfabeto = [
    [
        { "padrao": /^S$/, "proximoEstado": 1 }
    ],
    [
        { "padrao": /^U$/, "proximoEstado": 2 }
    ],
    [
        { "padrao": /^M$/, "proximoEstado": 3 }
    ],
    [
        { "padrao": /^I$/, "proximoEstado": 4 },
        { "padrao": /.*/, "proximoEstado": null, "retroceder": true }
    ],
    [
        { "padrao": /^F$/, "proximoEstado": null }
    ]
];

function palavraReservada(cadeia) {
    return automato(alfabeto, cadeia);
}

module.exports = palavraReservada;