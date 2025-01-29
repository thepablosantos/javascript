
function multiplicar(n1, n2) {
    const resultado = n1*n2
    console.log(`O valor de n1 x n2 é: ${resultado}!`)
}

multiplicar(10, 10);


const dobro = x => x * 2;

console.log(dobro(10));



class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }

    descrição() {
        console.log(`Este carro é ${this.marca} do ano ${this.ano}.`)
    }
}

const carro1 = new Carro("Fiat", 2000);
carro1.descrição();



class Calculadora {
    constructor() {}

    somar = (a, b) => a + b; // Arrow function corretamente definida na classe
}

const calc = new Calculadora();
console.log(`O resultado da soma é: ${calc.somar(10, 10)}`); // Correto!