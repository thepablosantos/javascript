let eu = {
    nome: "Pablo",
    profissao: "Dev web3",
    idade: 31,
    hello: function() {
        console.log("Hello World!");
    }
}

let animal = {
    patas: 4,
    rabo: 1,
    nome: "Scooby",
}

console.log(eu.nome);
console.log(eu.profissao);
console.log(eu.idade);
delete eu.idade;
console.log(eu.idade);
eu.genero = "Masculino";
console.log(eu.genero);
eu.hello();
Object.assign(animal, eu);
console.log(animal);