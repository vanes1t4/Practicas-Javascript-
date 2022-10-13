import React from "react";

function FormatoRegistro() {
  
  return (
    <form className="formulario"
      onSubmit={ev => {
        ev.preventDefault();
        
      }}
    >
      <h2>Registro de Citas</h2><br />
      <label htmlFor="nombre">Nombre Paciente</label><br />
      <input
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Nombre completo.."
        
      /><br />

      <label htmlFor="email">Correo Electronico</label><br />
      <input
        id="name"
        name="email"
        type="email"
        placeholder="Correo electrónico.."
        
        /><br />

      <label htmlFor="fecha">Fecha de Cita</label><br />
      <input
        id="fecha"
        name="fecha"
        type="date"
        
      /><br />

      <label htmlFor="hora">Hora de Cita</label><br />
      <input
        id="hora"
        name="hora"
        type="time"
        
      /><br />

      <label>Sintomas</label><br />
      <textarea
        id="sintomas"
        name="sintomas"
        placeholder="Sintomas que presenta.."
        
         /><br />
      <button
        name="registraCita"
        type="submit"
        value="Registrar Cita" />
    </form>
  )

}

export default FormatoRegistro