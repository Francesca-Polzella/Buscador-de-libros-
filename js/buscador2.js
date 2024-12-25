const ISBM = document.querySelector('#ISBM');
const year = document.querySelector('#year');
const titulo = document.querySelector('#titulo');
const categoria = document.querySelector('#categoria');
const autor = document.querySelector('#autor');
const libro = document.getElementById('miElemento');

// Define miFuncion
function miFuncion(event) {
    // Your function logic here
    console.log('Input event triggered:', event.target.value);
}

if (libro) {
    libro.addEventListener('input', miFuncion);
} else {
    console.error('Element with ID "miElemento" not found.');
}

// Generador de años
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
if (year) {
    generarAnios(year, 10);
} else {
    console.error('Element with ID "year" not found.');
}

// Función para limpiar el HTML
function limpiarHTML(element) {
    if (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    } else {
        console.error('Element is null or undefined.');
    }
}

// Función para mostrar autos
function mostrarAutos() {
    const resultado = document.querySelector('#resultados'); // Updated to match the HTML
    if (resultado) {
        limpiarHTML(resultado);
        // Código para mostrar autos
        const autosFiltrados = autos.filter(filtrarAuto);
        autosFiltrados.forEach(auto => {
            const autoHTML = document.createElement('div');
            autoHTML.innerHTML = `
                <p>ISBN: ${auto.ISBN}</p>
                <p>Año: ${auto.year}</p>
                <p>Título: ${auto.Titulo}</p>
                <p>Categoría: ${auto.Categoria}</p>
                <p>Autor: ${auto.Autor}</p>
            `;
            resultado.appendChild(autoHTML);
        });
    } else {
        console.error('Element with ID "resultados" not found.');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    mostrarAutos();
});

// Guardar objetos / datos de búsqueda 
const datosBusquedad = {
    ISBM: '',
    year: '',
    titulo: '',
    categoria: '',
    autor: '',
};

// Crear los eventos
document.addEventListener('DOMContentLoaded', () => {
    if (libro) {
        libro.addEventListener('input', miFuncion);
    }
    mostrarAutos();
});

// Eventos de entrada
if (ISBM) {
    ISBM.addEventListener('input', e => {
        datosBusquedad.ISBM = e.target.value;
        filtrarAuto();
    });
} else {
    console.error('Element with ID "ISBM" not found.');
}

if (year) {
    year.addEventListener('input', e => {
        datosBusquedad.year = Number(e.target.value);
        filtrarAuto();
    });
} else {
    console.error('Element with ID "year" not found.');
}

if (titulo) {
    titulo.addEventListener('input', e => {
        datosBusquedad.titulo = e.target.value;
        filtrarAuto();
    });
} else {
    console.error('Element with ID "titulo" not found.');
}

if (categoria) {
    categoria.addEventListener('input', e => {
        datosBusquedad.categoria = e.target.value;
        filtrarAuto();
    });
} else {
    console.error('Element with ID "categoria" not found.');
}

if (autor) {
    autor.addEventListener('input', e => {
        datosBusquedad.autor = e.target.value;
        filtrarAuto();
    });
} else {
    console.error('Element with ID "autor" not found.');
}

// Funciones de filtrado
function filtrarAuto() {
    const resultado = document.querySelector('#resultados'); // Updated to match the HTML
    if (resultado) {
        limpiarHTML(resultado);
        const autosFiltrados = autos.filter(filtrarISBM).filter(filtrarYear).filter(filtrartitulo).filter(filtrarcategoria).filter(filtrarautor);
        autosFiltrados.forEach(auto => {
            const autoHTML = document.createElement('div');
            autoHTML.innerHTML = `
                <p>ISBN: ${auto.ISBN}</p>
                <p>Año: ${auto.year}</p>
                <p>Título: ${auto.Titulo}</p>
                <p>Categoría: ${auto.Categoria}</p>
                <p>Autor: ${auto.Autor}</p>
            `;
            resultado.appendChild(autoHTML);
        });
    } else {
        console.error('Element with ID "resultados" not found.');
    }
}

function filtrarISBM(libro) {
    if (datosBusquedad.ISBM) {
        return libro.ISBN === datosBusquedad.ISBM;
    }
    return true;
}

function filtrarYear(libro) {
    if (datosBusquedad.year) {
        return libro.year === datosBusquedad.year;
    }
    return true;
}

function filtrartitulo(libro) {
    if (datosBusquedad.titulo) {
        return libro.Titulo.toLowerCase().includes(datosBusquedad.titulo.toLowerCase());
    }
    return true;
}

function filtrarcategoria(libro) {
    if (datosBusquedad.categoria) {
        return libro.Categoria.toLowerCase().includes(datosBusquedad.categoria.toLowerCase());
    }
    return true;
}

function filtrarautor(libro) {
    if (datosBusquedad.autor) {
        return libro.Autor.toLowerCase().includes(datosBusquedad.autor.toLowerCase());
    }
    return true;
}

// Sample data for testing
const autos = [
    {
		ISBN: '978-8498387087',
		Titulo: 'el jilguero',
		year: 2014,
		Categoria: 'ficción contemporánea',
		Autor: 'donna Tartt',
		
	},
	{ 
		ISBN: '978-0062315007 ',
		Titulo: 'el alquimista',
		year: 2015 ,
		Categoria: ' Ficción, filosofía',
		Autor: 'paulo coelho',
		
    },
	{
		ISBN: ' 978-0307387899',
		Titulo: 'la carretera',
		year: 2016 ,
		Categoria: ' ficción post-apocalíptica',
		Autor: 'cormac mcCarthy',
		
	},
	{ 
		ISBN: ' 978-8498387100',
		Titulo: 'cometas en el cielo',
		year:2017 ,
		Categoria: 'ficción histórica',
		Autor:'khaled hosseini'
    },
	{
		ISBN: ' 978-8498387101',
		Titulo: 'la vida de Pi',
		year:2018 ,
		Categoria: ' aventura, ficción',
		Autor:'yann martel'
	},
	{
		
		ISBN: '978-8498387102 ',
		Titulo: 'el circo de la noche',
		year:2019 ,
		Categoria: 'fantasía',
		Autor:'erin morgenstern'
	},
	
	{
		
		ISBN: ' 978-8498387103',
		Titulo: 'matar a un ruiseñor',
		year:2020 ,
		Categoria: 'clásico, ficción',
		Autor:'harper lee'
		
	},
	{ 
       
		ISBN: ' 978-8498387104',
		Titulo: 'la ladrona de libros',
		year:2021 ,
		Categoria: ' ficción histórica',
		Autor: 'markus zusak'
    },
	{
		
		ISBN: '  978-8498387105',
		Titulo: 'desde mi cielo',
		year: 2022,
		Categoria: ' ficción, Misterio',
		Autor:'alice sebold'
	},
	{ 
        
		ISBN: '978-8498387106 ',
		Titulo: 'la luz entre los océanos',
		year: 2023,
		Categoria: 'ficción histórica',
		Autor:'m.l. stedman'
    },
	{
		
		ISBN: ' 978-8498387107 ',
		Titulo: 'el océano al final del camino',
		year:2014 ,
		Categoria: 'fantasía',
		Autor:'neil gaiman'
	},
	{
		
		ISBN: ' 978-8498387108 ',
		Titulo: 'la verdad sobre el caso Harry Quebert',
		year: 2015,
		Categoria: 'misterio',
		Autor:' joël dicker'
	},
	{
		
		ISBN: ' 978-8498387109 ',
		Titulo: 'bajo la misma estrella',
		year: 2016,
		Categoria: ' ficción juvenil',
		Autor:'john green'
	},
	{ 
        
		ISBN: ' 978-8498387110 ',
		Titulo: 'nos vemos allá arriba',
		year: 2017,
		Categoria: 'ficción histórica',
		Autor:'pierre lemaitre'
    },
	{
		
		ISBN: '978-8498387111',
		Titulo: 'en la orilla',
		year:2018 ,
		Categoria: ' ficción contemporánea',
		Autor:'rafael chirbes'
	},
	{
		
		ISBN: '978-8498387112 ',
		Titulo: 'sapiens: de animales a dioses',
		year: 2019,
		Categoria: ' historia, ciencia',
		Autor:'yuval noah harari'
	},
	{
		
		ISBN: '978-8498387113 ',
		Titulo: 'patria',
		year: 2020,
		Categoria: 'ficción contemporánea',
		Autor:'fernando aramburu'
	},
	{
		
		ISBN: ' 978-8498387114',
		Titulo: 'el hombre que amaba a los perros',
		year:2021 ,
		Categoria: 'ficción histórica',
		Autor:'leonardo padura'
	},
	{ 
      
		ISBN: '978-8498387115 ',
		Titulo: 'el tiempo entre costuras',
		year:2022 ,
		Categoria: ' ficción histórica',
		Autor:'maría dueñas'
    },
	{
		ISBN: ' 978-8498387116',
		Titulo: 'la sombra del viento',
		year: 2023,
		Categoria: 'misterio, Ficción histórica',
		Autor:' carlos ruiz zafón'
	}
];