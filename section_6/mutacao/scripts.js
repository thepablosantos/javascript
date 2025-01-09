let pessoa = {
    nome: "Pablo",
}

let pessoa2 = pessoa;

if(pessoa === pessoa2) {
    console.log("É igual");
} else {
    console.log("É diferente");
}

pessoa2.nome = "João";
console.log(pessoa2.nome);
console.log(pessoa == pessoa2);