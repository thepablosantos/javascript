function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

console.log(podeDirigir(19, true));


let y = 10;

function imprimir() {
    let y = 25;
    console.log(y);
}

imprimir();

console.log(y);