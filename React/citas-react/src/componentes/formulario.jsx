import React from "react";

const FormatoRegistro = () => {
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de Citas</h2>
      <p className="mt-5 text-center text-lg mb-10">Agregar Pacientes 
      <span className="text-red-500 font-bold"> Administrarlos</span>
      </p>
    <form
    className="bg-slate-200 rounded-lg py-10 px-5 mb-10 shadow-md" >
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
      /></div>
      
    </form></div>
  )

}

export default FormatoRegistro