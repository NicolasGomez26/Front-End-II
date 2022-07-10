/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre = prompt("¿Cuál es su nombre?")
    datosPersona.edad = new Date().getFullYear() - parseInt(prompt("¿En qué año nació?"))
    datosPersona.ciudad = prompt("¿En qué ciudad vive?")
    datosPersona.interesPorJs  = confirm("¿Le interesa Java Script?") ? "Si" 
    : "No"
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").innerText= datosPersona.nombre 
  document.querySelector("#edad").innerText = datosPersona.edad
  document.querySelector("#ciudad").innerText = datosPersona.ciudad
  document.querySelector("#javascript").innerText = datosPersona.interesPorJs
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const container = document.querySelector("#fila")

  container.innerHTML = ``

  listado.forEach(e => {
    
    container.innerHTML += `
    <article class="caja">
    <img src="${e.imgUrl}" alt="${e.lenguajes}">
    <p class = "lenguajes">${e.lenguajes}</p>
    <p class = "bimestre">${e.bimestre}</p>
    </article>
    `
  });

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio")
  sitio.className === "dark" ? sitio.classList.remove("dark") : sitio.classList.add("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const sobreMi = document.querySelector("#sobre-mi")
const apretaF = document.querySelector("#card").querySelector("small")

  window.addEventListener("keypress", function(e){
      if (e.key == "F" || e.key == "f")  {
        sobreMi.classList.remove("oculto")
        apretaF.classList.add("oculto")
      }
  })
  
