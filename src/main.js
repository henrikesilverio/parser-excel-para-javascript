'use strict'

const lexica = require('./analise-lexica');

var tokens = lexica('"("');

for (var i = 0; i < tokens.length; i++) {
    console.log(tokens[i]);
}