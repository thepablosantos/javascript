/*
function ePaisagem(largura, altura) {
    if(largura > altura) {
        return true;
    }
        return false;
}

console.log(ePaisagem(20,10));


function ePaisagem(largura, altura) {
    while(largura>altura) { 
        return true; 
    } 
    return false;
}

console.log(ePaisagem(10, 20));
*/

function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem(1080, 1920));