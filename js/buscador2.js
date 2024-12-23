const ISBM = document.querySelector('#ISBM');
const year = document.querySelector('#year');
const titulo = document.querySelector('#titulo');
const categoria = document.querySelector('#categoria');
const autor = document.querySelector('#autor');
const libro = document.getElementById('miElemento')
if(libro){
    libro.addEventListener('input',miFuncion)
}else{
    console.error('Element with ID "miElemento" not found.');
}
// Generador de años
// Función para generar opciones de años
function generarAnios(selectElement, minYears) {
    const max = new Date().getFullYear();
    const min = max - minYears;

    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        selectElement.appendChild(option);
    }
}

// Llamar a la función para generar los años
generarAnios(year,10);



// Guardar objetos / datos de búsqueda 
const datosBusquedad = {
    ISBM: '',
    year: '',
    titulo: '',
    categoria: '',
    autor: '',
};

// Crear los eventos
document.addEventListener('DOMContentLoaded',(libro))
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(Libros);
});

// Eventos de entrada
ISBM.addEventListener('input', e => {
    datosBusquedad.ISBM = e.target.value;
    filtrarAuto();
});

year.addEventListener('input', e => {
    datosBusquedad.year = Number(e.target.value);
    filtrarAuto();
});

titulo.addEventListener('input', e => {
    datosBusquedad.titulo = e.target.value;
    filtrarAuto();
});

categoria.addEventListener('input', e => {
    datosBusquedad.categoria = e.target.value;
    filtrarAuto();
});

autor.addEventListener('input', e => {
    datosBusquedad.autor = e.target.value;
    filtrarAuto();
});

// Mostrar libros
function mostrarAutos(Libros) {
    limpiarHTML();
    const contenedor = document.querySelector('#resultado');
    
    // Armar el HTML para que se vean los libros 
    Libros.forEach(Libros => {
        const libroHTML = document.createElement('p');
        libroHTML.innerHTML = `${Libros.ISBM} - ${Libros.titulo} - ${Libros.year} - Categoría: ${Libros.categoria} - Autor: ${Libros.autor}`;
        contenedor.appendChild(libroHTML);
    });
}

// Limpiar el HTML
function limpiarHTML() {
    const contenedor = document.querySelector('#resultado'); 
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

// Filtración de libros
function filtrarAuto() {
    const resultado = Libros.filter(filtrarisbm)
                            .filter(filtrarYear)
                            .filter(filtrartitulo)
                            .filter(filtrarcategoria)
                            .filter(filtrarautor);
    
    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();
    const noResultadoDiv = document.createElement('div');
    noResultadoDiv.classList.add('alerta', 'error');
    noResultadoDiv.appendChild(document.createTextNode('No hay resultados para su búsqueda'));
    document.querySelector('#resultado').appendChild(noResultadoDiv);
}

function filtrarisbm(libro) {
    if (datosBusquedad.ISBM) {
        return libro.ISBM === datosBusquedad.ISBM;
    }
    return true; // Cambiado a true para que no filtre si ISBM está vacío
}

function filtrarYear(libro) {
    if (datosBusquedad.year) {
        return libro.year === datosBusquedad.year;
    }
    return true; // Cambiado a true para que no filtre si year está vacío
}

function filtrartitulo(libro) {
    if (datosBusquedad.titulo) {
        return libro.titulo.toLowerCase().includes(datosBusquedad.titulo.toLowerCase()); // Permitir coincidencias parciales
    }
    return true; // Cambiado a true para que no filtre si titulo está vacío
}

function filtrarcategoria(libro) {
    if (datosBusquedad.categoria) {
        return libro.categoria.toLowerCase().includes(datosBusquedad.categoria.toLowerCase()); // Permitir coincidencias parciales
    }
    return true; // Cambiado a true para que no filtre si categoria está vacío
}

function filtrarautor(libro) {
    if (datosBusquedad.autor) {
        return libro.autor.toLowerCase().includes(datosBusquedad.autor.toLowerCase()); // Permitir coincidencias parciales
    }
    return true; // Cambiado a true para que no filtre si autor está vacío
}

