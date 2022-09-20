import PromptSync = require('prompt-sync');
import { contaBanco } from './atividade2';

const prompt = PromptSync();
const nome = prompt('Digite seu nome:');
const agencia = Number(prompt('Digite sua agencia:'));
const senha = Number (prompt('Digite sua senha:'));
const email = prompt('Digite seu email:')

const contabanco = new contaBanco (nome, agencia, senha, email);

console.log(`O nome é ${nome}`);
console.log(`A agência é ${agencia}`);
console.log(`A senha é ${senha}`);
console.log(`O email é ${email}`);