"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var atividade3_1 = require("./atividade3");
var prompt = PromptSync();
var nome = prompt('Digite seu nome:');
var sobrenome = prompt('Digite seu sobrenome:');
var idade = Number(prompt('Digite sua idade:'));
var peso = Number(prompt('Digite seu peso:'));
var altura = Number(prompt('Digite sua altura:'));
var paciente = new atividade3_1.Paciente(nome, sobrenome, idade, peso, altura);
console.log("O nome do paciente \u00E9: ".concat(nome));
console.log("O sobrenome do paciente \u00E9: ".concat(sobrenome));
console.log("A idade do paciente \u00E9: ".concat(idade));
console.log("O peso do paciente \u00E9: ".concat(peso));
console.log("A altura do paciente \u00E9: ".concat(altura));