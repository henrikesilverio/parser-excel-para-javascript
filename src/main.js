'use strict'

// const lexica = require('./analise-lexica');
const automato = require('./palavra-reservada');

// var tokens = lexica('"("');

// for (var i = 0; i < tokens.length; i++) {
//     console.log(tokens[i]);
// }

var cadeia = ["S", "U", "M"];
var resultado = "";

console.log(automato(cadeia));