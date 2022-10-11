//atraves de una funcion generaremos una lista de cursos


//mi arreglo de datos a mostrar
const TECHNOLOGIES = [{
        url: 'reactjs.org',
        name: 'React JS'
    },
    {
        url: 'nodejs.org',
        name: 'Node JS'
    },
    {
        url: 'graphql.org',
        name: 'GraphQL'
    },
]

/**************************************************************
 * esta seccion muestra como lo hariamos de forma tradicional
 **************************************************************/
const tech = (params) => `
<div class="tech">
<img src="https://logo.clearbit.com/${params.url}"/>
<span>${params.name}</span>
</div>
`
    //usando mi cadena tech de forma visualmente clara (codificacion tradicional)
TECHNOLOGIES.forEach((techParams) => (document.body.innerHTML += tech(techParams)))

/********************************************************************************
 * esta seccion es creando una api para asegurar los elementos html completos 
 * USANDO API = creando el string de HTML
 *********************************************************************************/
const techDom = (params) => {
    const div = document.createElement('div')
    div.className = 'tech'
    const img = document.createElement('img')
    img.src = `https://logo.clearbit.com/${params.url}`
    const span = document.createElement('span')
    const text = document.createTextNode(params.name)

    div.appendChild(img)
    div.appendChild(span)
    span.appendChild(text)

    return div;
}


//haciendo uso del string armado quedaria:
TECHNOLOGIES.forEach((techParams) => {
    document.body.appendChild(techDom(techParams))
})

/********************************************************************
 * esta es la seccion con JSX que se refiere al manejo de componentes
 *********************************************************************/