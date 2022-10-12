//mi arreglo de datos a mostrar
const TECHNOLOGIES = [{
        url: 'reactjs.org',
        name: 'React JS',
        id: 1
    },
    {
        url: 'nodejs.org',
        name: 'Node JS',
        id: 2
    },
    {
        url: 'graphql.org',
        name: 'GraphQL',
        id: 3
    },
]

//en automatico con los scripts de React nos genera el objeto React
const techReact = (params) =>
    React.createElement('div', { className: 'tech', key: `${params.id}` }, [
        React.createElement('img', { src: `https://logo.clearbit.com/${params.url}`, key: `${params.id+10}`, }),
        React.createElement('span', { key: `${params.id+20}` }, params.name),
    ])


//mapeando el contenido de TECHNO.. con la formacion de la cadena
const techRendered = TECHNOLOGIES.map((techProps) => techReact(techProps))

//donde lo pintaremos?
//render = console.log
//que va a pintar (contenido de TECHNO..) y donde va a pintar (root)
const contenedor = document.getElementById('root')
const root = ReactDOM.createRoot(contenedor)
root.render(techRendered)