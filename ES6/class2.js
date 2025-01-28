const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[velocidade] >= 100) return;
        this[velocidade]++;
    }

    frear() {
        if(this[velocidade] <=  0) return;
        this[velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1);