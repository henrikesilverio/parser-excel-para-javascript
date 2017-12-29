'use strict'

const assert = require('chai').assert;
const automato = require('../src/cadeia-caracteres');

var cadeia = [];
var resultado = "";

describe("Autômato cadeia de caracteres", function () {
    it("Deve retornar 'Cadeia não aceita!' para valores diferentes de string", function () {
        cadeia = [""];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "skdasdkahdsjkh".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "@$!#%$#¨!".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");
    });

    it("Deve retornar 'Cadeia não aceita!' para string incompleta com aspas simples", function () {
        cadeia = "\"".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "\"     ".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "\"SA1*!'$.split('')";
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");
    });

    it("Deve retornar 'Cadeia não aceita!' para string incompleta com aspas duplas", function () {
        cadeia = "'".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "'     ".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "'SA1*!\"$".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");
    });

    it("Deve retornar 'Cadeia aceita!' para string com aspas simples", function () {
        cadeia = "''".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "'!'".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "'\"'".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "'\"' ".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "' '".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");
    });

    it("Deve retornar 'Cadeia aceita!' para string com aspas duplas", function () {
        cadeia = "\"\"".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "\"!\"".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "\"'\"".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "\"' \"".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "\" \"".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");
    });
});