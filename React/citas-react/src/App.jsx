/**
 * para abrir un proyecto en react
ejecutar 'npm run dev' ubicandome dentro de la carpeta del proyecto
copiar el local y pegar en el navegador = live server
 */


import Header from './componentes/header.jsx'
import ListadoPacientes from './componentes/listadoPaciente.jsx'
import FormatoRegistro from './componentes/formulario.jsx'
import { useState } from 'react'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState([])

  return (
    <div className="container mx-auto ml-5">
      <Header />
      <div className='md:flex'>
        <FormatoRegistro
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
