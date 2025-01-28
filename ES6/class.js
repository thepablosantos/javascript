class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }


    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('Pablo', 'Santos');
const p2 = new Pessoa('Santos', 'Pablo');
console.log(p1);
console.log(p2);