'use strict'

// const lexica = require('./analise-lexica');
const palavrasReservadas = require('./palavras-reservadas');
const cadeiaCaracteres = require('./cadeia-caracteres');
const simbolos = require('./simbolos');

const automatos = [
    simbolos
];

// var tokens = lexica('"("');

// for (var i = 0; i < tokens.length; i++) {
//     console.log(tokens[i]);
// }

var cadeia = '(SSUM""'.split('');
var tokens = [];
var indice = 0;

while (cadeia.length > 0) {
    tokens[indice] = { "cursor": -1 };
    automatos.forEach(function (automato) {
        var resultado = automato(cadeia);
        tokens[indice] = resultado.cursor > tokens[indice].cursor
                ? resultado
                : tokens[indice];
    });
    var posicaoCursor = tokens[indice].cursor === 0 ? 1 : tokens[indice].cursor;
    cadeia = cadeia.slice(posicaoCursor);
    indice++;
}

for (var i = 0; i < tokens.length; i++) {
    console.log(tokens[i].palavra);
}