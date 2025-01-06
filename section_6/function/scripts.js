function imprimirNoConsole() {
    console.log("Hello JT");
}

imprimirNoConsole();


let nome = "Pablo";
function salvarMeuNome(nome) {
    console.log(`O nome é ${nome}`);
}

salvarMeuNome(nome);

function imprimirUmNumero(num) {
    console.log("O numero é " + num);
}

imprimirUmNumero(7);
imprimirUmNumero(10);
imprimirUmNumero(20);

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();