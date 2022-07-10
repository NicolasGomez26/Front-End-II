const formulario = document.querySelector('form');
const nombre = document.querySelector('#nombre')
const pass = document.querySelector('#pass')
const tel = document.querySelector('#tel')
// const hobbies = document.querySelectorAll('input[name="hobbies"'):
const hobbies = document.getElementsByName('hobbies')
const nacionalidad = document.getElementsByName('nacionalidad')


const datos = {
    nom: "",
    pass: "",
    tel: "",
    hob: [],
    nac: "",
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    // console.log(nombre.value);
    datos.nom = normalizarNombre(nombre.value);
    // console.log(pass.value);
    datos.pass = pass.value;

    // console.log(tel.value);
    datos.tel = tel.value;

    hobbies.forEach( hobbie => {
        console.log(`${hobbie.id} -> ${hobbie.checked}`)
        if(hobbie.checked){
            datos.hob.push(hobbie.id);
        }
    })
    nacionalidad.forEach( pais => {
        console.log(`${pais.id} -> ${pais.checked}`)
        if(pais.checked){
            datos.nac = pais.id;
        }
    })
    console.table(datos)
    formulario.reset();
    
});

function normalizarNombre(nombre) {
    return nombre.toUpperCase().trim();
}

