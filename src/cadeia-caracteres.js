'use strict'

const automato = require('./automato');

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

function cadeiaCaracteres(cadeia) {
    return automato(alfabeto, cadeia);
}

module.exports = cadeiaCaracteres;