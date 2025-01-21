function myName(name) {
    if (name != 'Pablo') {
        throw new Error("O nome não está correto..");
    }
    return `Bem-vindo, ${name}!`;
}

try {
    console.log(myName('Pablo'));
    console.log(myName('João'));
} catch (error) {
    console.log(error.message);
}