'use strict'

var classificadores = {
    "palavrasReservadas": { "padrao": /^SUM(IF)*$/, "token": retornPalavra },
    "simbolo": { "padrao": /^[(]$|^[)]$/, "token": retornPalavra },
    "cadeiaCaractere": { "padrao": /^\".*\"$/, "token": "LITERAL" },
    "numero": { "padrao": /^[0-9]+$/, "token": "NUMERO" },
    "identificador": { "padrao": /^[a-zA-Z](_?[a-zA-Z0-9])*$/, "token": "ID" }
};

function retornPalavra(palavra) {
    return palavra;
}

function obterSimboloTerminal(token, prioridade) {
    switch (prioridade) {
        case 0:
            return classificadores["palavrasReservadas"].token(token);
        case 1:
            return classificadores["simbolo"].token(token);
        case 2:
            return classificadores["cadeiaCaractere"].token;
        case 3:
            return classificadores["numero"].token;
        case 4:
            return classificadores["identificador"].token;
        default:
            return "ERRO";
    }
}

function adicionarToken(classificados, tokens) {
    var maiorInserido = "";
    var prioridade = -1;
    for (var i = 0; i < classificados.length; i++) {
        if (classificados[i] &&
            classificados[i].length > maiorInserido.length) {
            maiorInserido = classificados[i];
            prioridade = i;
        }
    }
    tokens.push(obterSimboloTerminal(maiorInserido, prioridade));
}

const lexica = function(codigo) {
    if (typeof codigo !== 'string') {
        throw 'o valor de entrada não é uma "string"';
    }

    var coluna = 0;
    var delimitadores = /[(]|[)]|[\s]/;
    var podeIncluir = false;
    var token = "";
    var tokens = [];
    var classificados = ["", "", "", "", ""];
    while (coluna < codigo.length) {
        podeIncluir = delimitadores.test(codigo[coluna]) || delimitadores.test(codigo[coluna + 1]);
        token += codigo[coluna];

        if (classificadores["palavrasReservadas"].padrao.test(token)) {
            classificados[0] = token;
        }
        if (classificadores["simbolo"].padrao.test(token)) {
            classificados[1] = token;
        }
        if (classificadores["cadeiaCaractere"].padrao.test(token)) {
            classificados[2] = token;
        }
        if (classificadores["numero"].padrao.test(token)) {
            classificados[3] = token;
        }
        if (classificadores["identificador"].padrao.test(token)) {
            classificados[4] = token;
        }
        if (podeIncluir) {
            adicionarToken(classificados, tokens);
            token = "";
            classificados = ["", "", "", "", ""];
        }
        coluna++;
    }
    return tokens;
}

module.exports = lexica;