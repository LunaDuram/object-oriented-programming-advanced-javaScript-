import PromptSync = require('prompt-sync');
import { Patinete } from './atividade1';

const prompt = PromptSync();
const marca = String(prompt('Digite a marca do patinete:'));
const tamanho = Number(prompt('Digite o tamanho do patinete:'));
const cor = prompt('Digite a cor do patinete:');

const patinete = new Patinete(marca, tamanho, cor);

console.log(`A marca é ${marca}`);
console.log(`o tamanho é ${tamanho}`);
console.log(`a cor do patinete é ${cor}`);