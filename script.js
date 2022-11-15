const listaSpesa = ['Squame di drago', 'Occhi di lucertola', 'Fegato di mandragora', 'Spore di fungo magico', 'Bacchetta di mogano', 'Almanacco delle evocazioni', 'Pietra dell\'anima', 'Dolcetti di cioccolato'];
let listaUl = document.getElementById("contieniElementi");
let contaElementi = 0;
let htmlLiClass ='list-group-item d-flex justify-content-between align-items-center'
let htmlLiRemoverClass ='badge bg-danger rounded-pill cursor-pointer'

// Aggiungitorizzatore incantato di elementi
function nuovoElemento(elemento, indice) {
    listaUl.innerHTML += '<li id="e' + indice + '" class="' + htmlLiClass + '">' + elemento + '<span onclick="rimuovi(`e' + indice +'`)" class="' + htmlLiRemoverClass + '">X</span></li>';
    contaElementi++;
}

// For
for (let i=0; i<listaSpesa.length; i++) {
    console.log("For: " + listaSpesa[i]);
}

// While
let i=0;
while (i<listaSpesa.length) {
    console.log("While: " + listaSpesa[i]);
    nuovoElemento(listaSpesa[i], i);
    i++;
}

// Aggiunta e rimozione
function aggiungi() {
    let aggiungiNuovo = (document.getElementById("inputLista").value);
    nuovoElemento(aggiungiNuovo, contaElementi);
}

function rimuovi(elemento) {
    console.log(elemento + " rimosso.");
    document.getElementById(elemento).remove();
}