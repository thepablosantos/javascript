function meuTexto(texto) {
    if(texto.length>=10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do padrão");
    }
    console.log(texto.length);
}

meuTexto("Hello world!");
meuTexto("Hello!");