"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var atividade1_1 = require("./atividade1");
var prompt = PromptSync();
var marca = String(prompt('Digite a marca do patinete:'));
var tamanho = Number(prompt('Digite o tamanho do patinete:'));
var cor = prompt('Digite a cor do patinete:');
var patinete = new atividade1_1.Patinete(marca, tamanho, cor);
console.log("A marca \u00E9 ".concat(marca));
console.log("o tamanho \u00E9 ".concat(tamanho));
console.log("a cor do patinete \u00E9 ".concat(cor));
