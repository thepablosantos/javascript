class Endereco {
    constructor(rua, cidade, bairro, estado) {
        this.rua = rua;
        this.cidade = cidade;
        this.bairro = bairro;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }
}

let endereco = new Endereco('gaivotas', 'Joao Pessoa', 'Boa Vista', 'SC');
console.log(endereco);

endereco.novaRua = 'Rua dos pardais';
console.log(endereco);