'use strict'

const assert = require('chai').assert;
const automato = require('../src/cadeia-caracteres');

var cadeia = [];
var resultado = "";

describe("Autômato cadeia de caracteres", function () {
    it("Deve ter resultado inválido para valores diferentes de string", function () {
        cadeia = [""];
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "skdasdkahdsjkh".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "@$!#%$#¨!".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);
    });

    it("Deve ter resultado inválido para string incompleta com aspas simples", function () {
        cadeia = "\"".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "\"     ".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "\"SA1*!'$.split('')";
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);
    });

    it("Deve ter resultado inválido para string incompleta com aspas duplas", function () {
        cadeia = "'".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "'     ".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "'SA1*!\"$".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);
    });

    it("Deve ter resultado válido para string com aspas simples", function () {
        cadeia = "''".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "'!'".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "'\"'".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "'\"' ".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "' '".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);
    });

    it("Deve ter resultado válido para string com aspas duplas", function () {
        cadeia = "\"\"".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "\"!\"".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "\"'\"".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "\"' \"".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "\" \"".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);
    });
});