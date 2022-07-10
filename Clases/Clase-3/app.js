//funcion numeroAleatorio

function numAleatorio(numeroMinimo, numeroMaximo) {
    return Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo);
}
// Ejercicio 1 Tragamonedas

const premioTotal = 2500
const casilla = 10
let aciertos

let tirada = confirm("¿ Jugar ($800) ?")

if (tirada === true) {
    jugar()
}
function jugar() {
    aciertos = numAleatorio(1,casilla)
    const premio = (aciertos*premioTotal)/casilla
    alert("Acertaste: " + aciertos + " casillas, ganaste: $" + premio)
    let nuevaTirada = confirm("¿Querés tirar de nuevo?")
    if (nuevaTirada === true) {
        jugar()
    }
    else{alert("Saludos, vuelva prontos")}
}
jugar()



// Ejercicio 2 Lotería
let suenio
function loteria() {
    suenio = prompt("Introducí algo con lo que soñaste hoy")
    const premios = ["0", "1.000", "10.000", "100.000", "1.000.000"]
    let premioAleatorio = numAleatorio(0,4)
    let juegoNuevo = confirm("Tu sueño es: " + suenio + ", y ganaste: " + premios[premioAleatorio] + "\n" + "\n" + "¿Querés jugar de nuevo?")
    if (juegoNuevo === true) {
        loteria()
    }
}
loteria()

//Ejercicio 3 Ruleta
const finalRuleta = 25
let eleccion
let numero 
function tirar(){
    eleccion = parseInt(prompt("Ingresá un número entre 1 y 25"))
    numero = numAleatorio(1,finalRuleta)
    if (numero === eleccion) {
        let juegoNuevo = confirm("El número ganador es " + numero + "\n"+ "\n" + "¿Querés tirar de nuevo?")
        if (juegoNuevo ) {tirar()}
        }
    else if(isNaN(eleccion) || eleccion < 1|| eleccion > finalRuleta ){
        alert("Ingresá un numero válido, vuelve a intentar")
        tirar()
    }
    else{
        let volverAJugar = confirm("Salió el número: " + numero + ", Tu número no es el ganador, ¿Querés volver a intentarlo?")
        if (volverAJugar){tirar()}
    }
}
tirar()

