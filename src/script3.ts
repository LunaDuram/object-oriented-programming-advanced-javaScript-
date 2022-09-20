import PromptSync = require('prompt-sync');
import { Paciente } from './atividade3';

const prompt = PromptSync();
const nome = prompt('Digite seu nome:');
const sobrenome = prompt('Digite seu sobrenome:');
const idade = Number (prompt('Digite sua idade:'));
const peso = Number(prompt('Digite seu peso:'));
const altura = Number(prompt('Digite sua altura:'))

const paciente = new Paciente (nome, sobrenome, idade, peso, altura);

console.log(`O nome do paciente é: ${nome}`);
console.log(`O sobrenome do paciente é: ${sobrenome}`);
console.log(`A idade do paciente é: ${idade}`);
console.log(`O peso do paciente é: ${peso}`);
console.log(`A altura do paciente é: ${altura}`);