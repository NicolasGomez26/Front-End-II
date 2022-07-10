
/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
    email: "",
    password: "",
    legal: false
};

const errores = {
    email: 'Email no válido o incorrecto.',
    password: 'Contraseña no válida o incorrecta.',
    legal: 'Es necesario aceptar los términos y condiciones.',
    erroresPresentes: []
};

/* ---------------------------------- nodos --------------------------------- */

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputLegal = document.querySelector('#legal');
const cajaErrores = document.querySelector('.errores');
const formulario = document.forms[0];

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    // console.log(evento);

    // actualizo el estado de la pantalla con los datos ya normalizados 👇
    estadoUsuario.email = normalizarTexto(inputEmail.value);
    estadoUsuario.password = normalizarContrasenia(inputPassword.value);
    estadoUsuario.legal = !inputLegal.checked ? errores.erroresPresentes.push(errores.legal) : inputLegal.checked

    //renderizar cambios 👇
    cajaErrores.innerHTML = listarErrores(errores.erroresPresentes)

    // Limpiamos los ultimos errores
    errores.erroresPresentes = []
    
    console.log(estadoUsuario);
});


/* -------------------------------------------------------------------------- */
/*                                RENDERIZADOS                                */
/* -------------------------------------------------------------------------- */
function listarErrores(listado) {
    const contenido = [];
    console.log(listado)
    listado.forEach( item => {
        contenido.push(`<p><small>${item}</small></p>`);
    })

    return contenido;
}



/* -------------------------------------------------------------------------- */
/*                              FUNCIONES UTILES                              */
/* -------------------------------------------------------------------------- */
function normalizarTexto(texto) {
    // paso todo a minusculas y quito espacios sobrantes 👇
    if(texto.includes('@') && texto.includes('.com')) {
        return texto.toLowerCase().trim();
    }
    else {
        errores.erroresPresentes.push(errores.email)
    }
}
function normalizarContrasenia(texto) {
    // quito espacios sobrantes 👇
    let contra = texto.trim();
    if(contra.length > 8 && contra.length < 20) {
        return contra
    }
    else {
        errores.erroresPresentes.push(errores.password)
    }
}
