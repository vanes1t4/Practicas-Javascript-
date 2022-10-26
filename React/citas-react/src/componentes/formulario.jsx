//useEffect - (hook) me ayuda a realizar todo tipo de operacion incluyendo un efecto secundario,
//          remplazar los metodos de las clases y actualizar con cada modificacion
// Reglas de hook- siempre tienen que estar arriba de nuestros componentes
//                 no debe colocarse en un condicional
//                 nunca despues del return 

import React, { useState, useEffect } from "react";
import ManejoError from "./manejoError";

function FormatoRegistro({ pacientes, setPacientes, paciente, setPaciente }) {
  //variables que necesitare para actualizar el estado de mis componentes de formulario
  //setMascota solo funciona de modificador pero no guarda el valor
  //useState - hook que me dice el estado, inicia vacio

  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [correo, setCorreo] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const validacionFormulario = (e) => {
    e.preventDefault()
    //si falta uno de los campos
    if ([mascota, propietario, correo, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacio, verifique.')
      setError(true)
      return
    }
    setError(false)

    const objPaciente = { mascota, propietario, fecha, correo, sintomas }
    console.log('Llave recibida: '+paciente.id)
    if (paciente.id) {
      objPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      objPaciente.id = generarId()
      console.log('Llave generada: '+objPaciente.id)
      setPacientes([...pacientes, objPaciente])

    }
    setPacientes([...pacientes, objPaciente])
    setMascota('')
    setPropietario('')
    setCorreo('')
    setFecha('')
    setSintomas('')
  }

  useEffect(() => {
    //verificando que haya algo por llaves
    if (Object.keys(paciente).length > 0){
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setCorreo(paciente.correo)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Registro de Citas</h2>
      <p className="mt-5 text-center text-lg mb-10">Agrega Pacientes
        <span className="text-indigo-500 font-bold"> Administrarlos</span>
      </p>
      <form
        className="bg-slate-200 rounded-lg py-10 px-5 mb-10 shadow-md"
        onSubmit={validacionFormulario}
      >
        {error &&
          <ManejoError><p>Todos los campos son obligatorios</p></ManejoError>
        }
        <div>
          <label
            htmlFor="mascota"
            className="block uppercase font-bold text-gray-700"
          >Nombre de la Mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de Mascota.."
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            onChange={(e) => setMascota(e.target.value)}
            value={mascota}
          /></div>
        <div>
          <label
            htmlFor="propietario"
            className="block uppercase font-bold text-gray-700"
          >Nombre del Propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario.."
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            onChange={(e) => setPropietario(e.target.value)}
            value={propietario}
          /></div>
        <div>
          <label
            htmlFor="correo"
            className="block uppercase font-bold text-gray-700"
          >Correo Electronico</label>
          <input
            id="correo"
            type="email"
            placeholder="Correo Electronico.."
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
          /></div>
        <div>
          <label
            htmlFor="fecha"
            className="block uppercase font-bold text-gray-700"
          >Fecha de Alta</label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            onChange={(e) => setFecha(e.target.value)}
            value={fecha}
          /></div>
        <div>
          <label
            htmlFor="sintomas"
            className="block uppercase font-bold text-gray-700"
          >Sintomas</label>
          <textarea
            id="sintomas"
            name="sintomas"
            placeholder="Sintomas que presenta.."
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md resize-none"
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
          /></div>
        <input
          type="submit"
          className="bg-indigo-500 text-white font-bold uppercase hover:{bg-indigo-700} cursor-pointer p-2 rounded-md"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />

      </form></div>
  )

}

export default FormatoRegistro