const contenedor = document.querySelector('.contenedor')
const boton = document.querySelector('button')
const felinos = [
    {
      title: 'El tigre',
      imgUrl: './imagenes/tiger.jpg',
      description: 'El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.',
      createdAt: '2021-06-01T23:12:11.837Z'
    },
    {
      title: 'El leon',
      imgUrl: './imagenes/leon.jpg',
      description: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
      createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
      title: 'El leopardo',
      imgUrl: './imagenes/leopardo.jpg',
      description: 'El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).',
      createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
      title: 'La pantera negra',
      imgUrl: './imagenes/pantera-negra.jpg',
      description: 'La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.',
      createdAt: '2021-04-09T23:12:11.837Z'
    },
    {
      title: 'El jaguar',
      imgUrl: './imagenes/jaguar.jpg',
      description: 'El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo).',
      createdAt: '2021-05-18T23:12:11.837Z'
    },
    {
      title: 'El guepardo',
      imgUrl: './imagenes/chita.jpg',
      description: 'El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.',
      createdAt: '2021-05-22T23:12:11.837Z'
    },
  ];
  
function crearItem(felino){

    // const item = document.createElement("div")
    // const img = document.createElement("img")
    // const h2 = document.createElement("h2")
    // const p = document.createElement("p")

    // img.setAttribute('src', felino.imgUrl)
    // img.setAttribute('alt', 'Imagen de '+ felino.title)
    // h2.innerText = felino.title
    // p.innerText = felino.description

    // item.classList.add('item')
    // item.appendChild(img)
    // item.appendChild(h2)
    // item.appendChild(p)

    // contenedor.appendChild(item)

    //  --------------------------------------------- otra solucion

    const item = document.createElement('div')
    item.setAttribute('class', 'item')
    item.innerHTML += `
    <a><img src= "${felino.imgUrl}" alt " ${felino.title}"></a>
    <div>
        <h2>${felino.title}</h2>
        <p>${felino.description}</p>
    </div>`
    contenedor.appendChild(item)
}

function agregarItems(){
    for(felino of felinos){
        crearItem(felino)
    }
}

agregarItems()

function darkMode(){

    const items = document.querySelectorAll('item')
    const tituloItem = document.querySelectorAll('h2')
    const titulo = document.querySelector('h1')
    const body = document.querySelector('body')

    if(body.classList.contains('dark-body')){
        body.classList.remove('dark-body')
        titulo.classList.remove('dark-h1')
        items.classList.remove('dark-item')
        tituloItem.classList.remove('dark_h2_item')
    } else
        body.classList.add('dark-body')
        titulo.classList.add('dark-h1')
        items.classList.add('dark-item')
        tituloItem.classList.add('dark_h2_item')
}

boton.addEventListener('click', darkMode)

const enlaces = document.querySelectorAll('a')



enlaces.forEach((enlace, i)=>{
  enlace.setAttribute('href', felinos[i].imgUrl)
  enlace.setAttribute('target', '_blank')
})