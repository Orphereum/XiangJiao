// Defino variable de contador que al principio vale 0
var contador = 0;
var tiempo = 60;
var Jugando;

function incrementarContador(){
    //Incrementar contador + Boolean en true
    contador++;
    Jugando = true;
    //Actualización de los puntos y mostar el botón de reset
    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("botonReset").style.display = "block";
    
    
}

var CuentaAtras = setInterval(function(){
if (Jugando == true) 
{
    //Si el tiempo llega a 0 el juego termina 
    if(tiempo <= 0){
        //invocación ventana emergente
        alert("Ha finalizado el juego, clicks realizados: " + contador)
    //Reiniciar el contador
    resetearContador();
    }
    else
     {
        //Actualizar tiempo + reducción de tiempo
        document.getElementById("tiempo").innerHTML = tiempo;
        tiempo--;
    }
}

}, 1000); //Comprobación cada segundo sobre el valor de tiempo

function resetearContador() {
    //Pongo el contador a 0
    contador = 0;
    tiempo = 60;   

    //Actualizo los puntos y oculto botonReset
    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("tiempo").innerHTML = tiempo;
    document.getElementById("botonReset").style.display = "none";
}
function Nombre(){
    
    alert("XiangJiao significa banana en chino.")
}