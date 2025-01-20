// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 
let nombres;


function add(){
    nombres = document.getElementById('amigo1').value;

    if (nombres == ""){
        alert("Por favor, inserte un nombre");
    }else{

        amigos.push(nombres);

        document.querySelector('#amigo1').value = "";

        actualizarLista();
    }
}

function actualizarLista(){

    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = ""; //asegurarse que no haya duplicados al actualizar

    for ( let i = 0; i < amigos.length ; i++  ){

        lista.innerHTML += ` <li> ${amigos[i]} </li> `;

    }

}

function sortearAmigo(){

    if (amigos.length === 0){

        alert("No ingresó ningun nombre para sortear ");
        return;
    }

    let indiceAleat = Math.floor(Math.random()*amigos.length);

    let resultado1 = amigos[indiceAleat];

    document.getElementById('resultado').innerHTML = ` <h2> El nombre sorteado es: ${resultado1} `;
    document.getElementById('listaAmigos').innerHTML = "";

}
