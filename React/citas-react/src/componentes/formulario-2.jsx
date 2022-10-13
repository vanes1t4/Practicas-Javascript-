import React from "react";

class Formato extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '  Escriba aqui..'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="formulario">
            <h2>Registro de Citas</h2><br />
            <label htmlFor="nombre">Nombre Paciente</label>
      <input id="nombre" name="nombre" type="text" value={this.state.value} onChange={this.handleChange}/><br />
      <label htmlFor="email">Correo Electronico</label>
      <input id="email" name="email" type="email" value={this.state.value} onChange={this.handleChange} /><br />
      <label htmlFor="fecha">Fecha de Cita</label>
      <input id="fecha" name="fecha" type="date" value={this.state.value} onChange={this.handleChange} /><br />
            <label htmlFor="hora">Hora de Cita</label>
      <input id="hora" name="hora" type="time" value={this.state.value} onChange={this.handleChange} /><br />
          <label>
            Sintomas</label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Registrar Cita" />
        </form>
      );
    }
  }

  export default Formato
