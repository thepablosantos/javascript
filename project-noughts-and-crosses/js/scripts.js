let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelector(".box");
let buttons = document.querySelector("buttons-container button");
let messageContainer = document.querySelector("message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// play counter
let player1 = 0;
let player2 = 0;

// add event click in the boxes
for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);

        if(this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            //counter play
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }
    });
}


function checkEl(player1, player2) {

    if(player1 == player2) {
        // x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;

}
