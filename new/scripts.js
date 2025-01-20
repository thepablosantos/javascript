const pessoa = {
    nome: 'Pablo',
    sobrenome: 'Santos',
    idade: 31
};



for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}