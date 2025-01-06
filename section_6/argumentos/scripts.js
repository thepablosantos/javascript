function nomeComIdade(nome, idade) {
    if(idade == undefined) {
        console.log("Seu nome é " + nome);
    } else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos");
    }
}

nomeComIdade("Pablo");
nomeComIdade("Pablo", 31);