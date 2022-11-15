const listaSpesa = ['Squame di drago', 'Occhi di lucertola', 'Fegato di mandragora', 'Spore di fungo magico', 'Bacchetta di mogano', 'Almanacco delle evocazioni"', 'Pietra dell\'anima', 'Dolcetti di cioccolato'];
let listaUl = document.getElementById("contieniElementi");
let contaElementi = 0;
let htmlLiClass ='list-group-item d-flex justify-content-between align-items-center'
let htmlLi

for (let i=0; i<listaSpesa.length; i++) {
    console.log("For: " + listaSpesa[i]);
}

let i=0;
while (i<listaSpesa.length) {
    console.log("While: " + listaSpesa[i]);
    listaUl.innerHTML += '<li id="e' + contaElementi + '" class="' + htmlLiClass + '">' + listaSpesa[i] + '</li>';
    i++;
}

function aggiungi() {
    let elementoNuovo = (document.getElementById("inputLista").value);
    contaElementi++;
}