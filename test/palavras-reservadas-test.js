'use strict'

const assert = require('chai').assert;
const automato = require('../src/palavras-reservadas');

var cadeia = [];
var resultado = "";

describe("Autômato palavras reservadas", function () {
    it("Deve ter resultado inválido para palavras diferentes", function () {
        cadeia = "skdasdkahdsjkh".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "213165465".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "@$!#%$#¨!".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);
    });

    it("Deve ter resultado inválido para palavras incompletas", function () {
        cadeia = "S".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "SU".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "SUMI".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);
    });

    it("Deve ter resultado válido para palavras reservadas", function () {
        cadeia = "SUM".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "SUMIF".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);
    });
});