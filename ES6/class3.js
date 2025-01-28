class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }

        this.ligado = true;
        console.log(`${this.nome} foi ligado com sucesso`);
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`);
            return;
        }

        this.ligado = false;
        console.log(`${this.nome} foi desligado com sucesso`);
    }
}