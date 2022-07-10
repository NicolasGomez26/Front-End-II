
let nombreMaq = "Carla"
let ganadasMaq = 0
let ganadasJug = 0
let nombreJug = prompt ("¿Cuál es tu nombre?")

function jugar(){
    let puntosJugador = 0
    let puntosMaq = 0
    let eleccionJug
    while (puntosJugador < 2 && puntosMaq < 2) {
        eleccionJug = parseInt(prompt("Elija Piedra(1), Papel(2), Tijera(3)"))
            console.log(nombreJug + " eligió: " + eleccionJug);
            let eleccionMaq = Math.floor(Math.random() * 3 + 1)
            console.log(nombreMaq + " eligio: " + eleccionMaq);
            if ((eleccionJug === 1 && eleccionMaq === 3) || (eleccionJug === 2 && eleccionMaq === 1) || (eleccionJug === 3 && eleccionMaq === 2)) {
                puntosJugador ++
            }
            else if (eleccionJug === eleccionMaq){
                console.log("Empate");
            }
            else {
                puntosMaq ++;
            }
            if (puntosJugador === 2) {
                alert("Ganó " + nombreJug + " " + puntosJugador + " a " + puntosMaq)
                ganadasJug ++
            }
            if (puntosMaq === 2) {
                alert("Ganó " + nombreMaq + " " + puntosMaq + " a " + puntosJugador)
                ganadasMaq ++
            }
        }
        let respuesta = confirm("¿Querés jugar de nuevo?")
        if (respuesta == true) {
            console.log("Nuevo Juego");
            jugar()
        }else{
            alert("Juego terminado: " + nombreJug + " ganaste: " + ganadasJug + " y " + nombreMaq + " ganó: " + ganadasMaq)
        }
    }
    jugar()




