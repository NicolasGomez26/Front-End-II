const btn = document.querySelector('#random');
const imgDog = document.querySelector('main img')

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

//USAMOS FETCH DENTRO DE UNA FUNCION, Y LA INVOCAMOS DENTRO DE UN EVENTO DE CLICK
// function peticion(url) {
    // fetch(url).then( respuesta => {
    //     // La respuesta debe usar el metodo de parseo json() que funciona con operaciones asincronas como lo es fetch
    //     return respuesta.json()
    //  el primer then retorna una NUEVA promesa, con lo cual, se vuelve a usar then para obtener los datos
    // }).then( datos => {
    //     // console.log(datos);
    //     // modficamos la UI agregando la imagen que nos llegó en la peticion
    //     data = datos
    //     return data
    // }).catch( error => {
    //     //Aca recibimos algo que viene rechazado(Ejemplo: "Problema X")
    //     console.log(error);
    // });
// };

//escuchamos el click del boton para disparar la peticion
btn.addEventListener('click', function() {
    peticion(apiUrl);
    // console.log(data)
    // imgDog.setAttribute('src', data.message);
})

//REUTILIZAR FUNCION DE LA REQUEST CON CUALQUIER API
// let data;
// function peticion(url) {
//     fetch(url).then( respuesta => {
//         // console.log(respuesta);
//         return respuesta.json()
//     }).then( datos => {
//         // console.log(datos);
//         // le damos un nuevo valor a data para que este disponible
//         data = datos
//         return data
//     }).catch( error => {
//         //Aca recibimos algo que viene rechazado(Ejemplo: "Problema X")
//         console.log(error);
//     });
// };

//ASYNC / AWAIT.  Refactorizamos la funcion de la request para crear una funcion asincrona 
// con un codigo mas legible y manejamos los errores con try/catch. Revisar diferencias en sintaxis con el caso anterior.
async function peticion(url) {

try{
    let data = await fetch(url)
    let dataParsed = await data.json()
    console.log(dataParsed)
}
catch (err) {
    console.log(err)
}

};

