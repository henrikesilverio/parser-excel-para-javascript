'use strict'

// const lexica = require('./analise-lexica');
const automato = require('./automato-string');

// var tokens = lexica('"("');

// for (var i = 0; i < tokens.length; i++) {
//     console.log(tokens[i]);
// }

var cadeia = ["\""];
var resultado = "";

console.log(automato(cadeia));