//Funcion numero aleatorio

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) +min);
}

function eleccion(jugada){
    let resultado = "";
    if(jugada == 1){
        resultado = "Piedra ✊";
    }else if(jugada == 2){
        resultado = "Papel 📄";
    }else if(jugada == 3){
        resultado = "Tijeras ✂️";
    }else{
        resultado = "MAL ELEGIDO";
    }

    return resultado;
}
// 1 es piedra, 2 es papel, 3 es tijeras. 
let jugador = 0;
let pc = aleatorio(1, 3);

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijeras");
// alert("Elegiste " + jugador);

alert("Tu eliges: " + eleccion(jugador));
alert("PC elige: " + eleccion(pc));

//COMBATE

if(pc == jugador){
    alert("¡¡EMPATE!!");
}else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
    alert("¡¡GANASTE!!");
}else{
    alert("¡¡PERDISTE!!");
}