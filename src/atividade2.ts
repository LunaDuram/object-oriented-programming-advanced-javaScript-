class contaBanco{
    private nome: string;
    private senha: number;
    private agencia: number;
    private email: string;

    constructor(nome:string, senha: number, agencia: number, email: string){
        this.nome = nome;
        this.senha = senha;
        this.agencia = agencia;
        this.email = email;
    }
}

export{contaBanco};