// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresSorteados=[];
let numeroMaximoLista=0;

function agregarAmigo(){

    let nombreAmigo=document.getElementById('amigo').value;
    
    if(nombreAmigo==''){
        alert("Por favor inserte un nombre");
    }else {
        listaNombresSorteados.push(nombreAmigo);
    }
    console.log(listaNombresSorteados);
    limpiarCaja();
    //console.log(listaNombresSorteados);

    actualizaLista();
    

}

function actualizaLista(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML="";

    for (let i=0;i<listaNombresSorteados.length;i++){
        const li=document.createElement("li");
        li.textContent=listaNombresSorteados[i];

        lista.appendChild(li);
    }
}


function sortearAmigo(){

    if(listaNombresSorteados.length==0){
        alert("No hay nombres en la lista");
    }else{
        let numeroRandom=Math.floor(Math.random()*listaNombresSorteados.length);
        //console.log(numeroRandom);
        let resultado=document.getElementById('resultado');
        resultado.innerHTML="Tu amigo secreto es: " + listaNombresSorteados[numeroRandom];
    }


}

function limpiarCaja(){
    document.getElementById('amigo').value='';
}



