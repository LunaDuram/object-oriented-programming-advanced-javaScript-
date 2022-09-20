class Paciente{
    private nome: string;
    private sobrenome: string;
    private idade: number;
    private peso: number;
    private altura: number;

    constructor(nome:string, sobrenome: string, idade: number, peso: number, altura: number){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
}

export{Paciente};