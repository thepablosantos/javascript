function verificarDado(dado) {
    if(typeof dado === "string") {
        return "É uma string";
    } else if(typeof dado === "boolean") {
        return "É boolean";
    } else if(typeof dado === "number") {
        return "É um number";
    }
}

console.log(verificarDado(true));
console.log(verificarDado(22));
console.log(verificarDado("Pablo"));