const listaSpesa = ['Squame di drago', 'Occhi di lucertola', 'Fegato di mandragora', 'Spore di fungo magico', 'Bacchetta di mogano', 'Almanacco delle evocazioni', 'Pietra dell\'anima', 'Dolcetti di cioccolato'];
let listaUl = document.getElementById("contieniElementi");
let contaElementi = 0;
let htmlLiClass ='list-group-item d-flex justify-content-between align-items-center'
let htmlLiRemoverClass ='badge bg-danger rounded-pill'

for (let i=0; i<listaSpesa.length; i++) {
    console.log("For: " + listaSpesa[i]);
}

function nuovoElemento(elemento, indice) {
    listaUl.innerHTML += '<li id="e' + indice + '" class="' + htmlLiClass + '">' + elemento + '<span id="x' + indice + '" onclick="rimuovi(e' + indice +')" class="' + htmlLiRemoverClass + '">X</span></li>';
    contaElementi++;
}

let i=0;
while (i<listaSpesa.length) {
    console.log("While: " + listaSpesa[i]);
    nuovoElemento(listaSpesa[i], i);
    i++;
}

function aggiungi() {
    let aggiungiNuovo = (document.getElementById("inputLista").value);
    nuovoElemento(aggiungiNuovo, contaElementi);
}

function rimuovi(elemento) {
    document.getElementById("" +elemento).remove;
}