let name = "Pablo";

for(let i = 0; i < 10; i++) {

    if(i == 3) {
        name = "Joao";
    }

    if(i == 5 && name == "Joao") {
        console.log("O nome é Joao, pode parar");
        break;
    }

    console.log(i);
}