let eu = {
    nome: "Pablo",
    profissao: "Dev web3",
    idade: 31,
    hello: function() {
        console.log("Hello World!");
    }
}

console.log(eu.nome);
console.log(eu.profissao);
console.log(eu.idade);
delete eu.idade;
console.log(eu.idade);
eu.genero = "Masculino";
console.log(eu.genero);
eu.hello();