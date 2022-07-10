
let fondo = document.body

function darkmode() {
    fondo.classList.toggle("backBody")
    button = document.querySelector("button")
    button.innerText = estado ? "oscuro" : "Claro"
}
