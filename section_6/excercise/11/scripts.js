let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
};

delete onibus.passageiros;

console.log(onibus);
console.log("A quantidade de rodas é: " + onibus.rodas);

onibus.janelas = 20;
console.log(onibus);
console.log("A quantidade de janelas é: " + onibus.janelas);
