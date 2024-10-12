//crear los selectores 
const ISBN=document.querySelector('#ISBN')
const year=document.querySelector('#year')
const Categoria=document.querySelector('#Categoria')
const Autor=document.querySelector('#Autor')
const Titulo=document.querySelector('#Titulo')



//generador de años
const years = document.createElement('option')
const max = new Date().getFullYear();
const min= max-10;

for(let i =max; i > min; i --){
    //console.log(i)
    const option = document.createElement('option')
    option.value= i 
    option.innerText= i
    document.querySelector('#year').appendChild(option)
}

// guardar objetos / datos de busquedad 

const datosBusquedad = {
    ISBN: '',
    year:'',
    Titulo:'',
    Categoria:'',
    Autor:''
    

//crear los eventos

document.addEventListener('DOMContentLoaded',()=>{
    mostrarLibros(Libros)
    //este es solo para ver los autos 
})
 
ISBN.addEventListener('input',e =>{
    datosBusquedad.ISBN = e.target.value
    //console.log(datosBusquedad.marca)
    filtrarLibros()
})


year.addEventListener('input',e =>{
    datosBusquedad.year = Number(e.target.value)
    //console.log(datosBusquedad.year)
    filtrarLibros()
})

Titulo.addEventListener('input',e =>{
    datosBusquedad.Titulo = e.target.value
    //console.log(datosBusquedad.transmision)
    filtrarLibros()
})


    
Categoria.addEventListener('input',e =>{
    datosBusquedad.Categoria = e.target.value
    //console.log(datosBusquedad.transmision)
    filtrarLibros()
})


Autor.addEventListener('input',e =>{
    datosBusquedad.Autor = e.target.value
    //console.log(datosBusquedad.color)
    filtrarLibros()
})


function mostrarLibros (Libros){
    limpiarHTML()
    const contenedor= document.querySelector('#resultado')
    //armar el HTML PARA QUE SE VEAN LOS AUTOS 
    Libros.forEach(Libros => {
        const librosHTML =document.createElement('p')
        librosHTML.innerHTML=
        `<p> ${Libros.Titulo}-'ISBN:'${Libros.ISBN}- ${Libros.year}-'Categoria:'${Libros.Categoria} - Autor: ${Libros.Autor}</p>`
        contenedor.appendChild(librosHTML)
    });
}

// limpiar el html
function limpiarHTML(){
  const contenedor =document.querySelector('#resultado') 
  
  while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild)
  }
}
// para creara la filtracion

function filtrarLibros(){
    const resultado =Libros.filter(filtrarTitulo).filter(filtrarYear).filter(filtrarCategoria).filter(filtrarAutor).filter(filtrarISBN)
    console.log(resultado)
    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
}

function noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta','error')
    noResultado.appendChild(document.createTextNode('No hay resultados para su busqueda'))
    document.querySelector('#resultado').appendChild(noResultado)

}

function filtrarTitulo(Libros){
    if(datosBusquedad.Titulo){
        return Libros.Titulo === datosBusquedad.Titulo
    }
    return Libros
}



function filtrarYear(Libros){
    if(datosBusquedad.year){
        return Libros.year === datosBusquedad.year
    }
    return Libros
}

function filtrarCategoria(Libros){
    if(datosBusquedad.Categoria){
        return Libros.Categoria === datosBusquedad.Categoria
    }
    return Libros
}
//
function filtrarAutor(Libros){
    if(datosBusquedad.Autor){
        return Libros.Autor === datosBusquedad.Autor

    }
    return Libros
}




function filtrarISBN(Libros){
    if(datosBusquedad.Libros){
        return Libros.ISBN === datosBusquedad.ISBN
    }
    return Libros
}
