'use strict'

const automato = require('./automato');

var alfabeto = [
    [
        { "padrao": /[0-9]/, "proximoEstado": 1 }
    ],
    [
        { "padrao": /^[0-9]/, "proximoEstado": 1 },
        { "padrao": /.*/, "proximoEstado": null, "retroceder": true }
    ]
];

function numero(cadeia) {
    return automato(alfabeto, cadeia);
}

module.exports = numero;