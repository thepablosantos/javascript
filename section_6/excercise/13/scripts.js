let nomes = ["Pablo", "Lucas", "João", "Matheus", "Felipe"];
let idade = [10, 12, 15, 20];

function verifyElements(arr) {
    if(arr.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verifyElements(nomes);
verifyElements(idade);