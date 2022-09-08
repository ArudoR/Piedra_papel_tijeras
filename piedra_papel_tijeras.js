// 1 es piedra, 2 es papel, 3 es tijeras. 
let jugador = 0;
let pc = aleatorio(1, 3);

jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijeras");
// alert("Elegiste " + jugador);

if(jugador == 1){
    alert("Elegiste ✊");
}else if(jugador == 2){
    alert("Elegiste 📄");
}else if(jugador == 3){
    alert("Elegiste ✂️");
}else{
    alert("Elegiste PERDER");
}

if(pc == 1){
    alert("PC elige ✊");
}else if(pc == 2){
    alert("PC elige 📄");
}else if(pc == 3){
    alert("PC elige ✂️");
}

//COMBATE

if(pc == jugador){
    alert("¡¡EMPATE!!");
}else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
    alert("¡¡GANASTE!!");
}else{
    alert("¡¡PERDISTE!!");
}

//Funcion numero aleatorio

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) +min);
}