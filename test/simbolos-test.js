'use strict'

const assert = require('chai').assert;
const automato = require('../src/simbolos');

var cadeia = [];
var resultado = "";

describe("Autômato simbolos", function () {
    it("Deve ter resultado inválido para simbolos inválidos", function () {
        cadeia = "#".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "!".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "?".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);
    });

    it("Deve ter resultado válido para simbolos válidos", function () {
        cadeia = ")".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "(".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);
    });
});