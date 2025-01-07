function pessoa(idade) {
    if(idade>=18) {
        return ("Pode entrar na auto escola");
    } else {
        return ("Não pode entrar na auto escola");
    }
}

const idadeAleatoria = Math.floor(Math.random() * 50) + 1;

console.log(`A idade gerada: ${idadeAleatoria}`);
console.log(pessoa(idadeAleatoria));