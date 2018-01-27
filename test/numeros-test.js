'use strict'

const assert = require('chai').assert;
const automato = require('../src/numeros');

var cadeia = [];
var resultado = "";

describe("Autômato números", function () {
    it("Deve ter resultado inválido para números inválidos", function () {
        cadeia = ".1".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "A1".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);

        cadeia = "%2".split('');
        resultado = automato(cadeia);
        assert.isFalse(resultado.estaValido);
    });

    it("Deve ter resultado válido para números válidos", function () {
        cadeia = "0".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "12".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "123".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);

        cadeia = "0123456789".split('');
        resultado = automato(cadeia);
        assert.isTrue(resultado.estaValido);
    });
});