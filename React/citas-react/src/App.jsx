/**
 * para abrir un proyecto en react
ejecutar 'npm run dev' ubicandome dentro de la carpeta del proyecto
copiar el local y pegar en el navegador = live server
 */


import Header from './componentes/header.jsx'
import ListadoPacientes from './componentes/listadoPaciente.jsx'
import FormatoRegistro from './componentes/formulario.jsx'

function App() {
return(
  <>
  <Header/>
  
  <FormatoRegistro/>
  <ListadoPacientes/>
  </>
)
}

export default App
