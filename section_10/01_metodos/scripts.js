const cachorro = {
    uivar: function() {
        console.log("Auuuu");
    },
    rosnar: function() {
        console.log("grrrrr");
    },

    setRaca: function(raca) {
        this.raca = raca;
    },

    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

cachorro.setRaca("Pastor Alemão");
console.log(cachorro.raca);
console.log(cachorro.getRaca());

