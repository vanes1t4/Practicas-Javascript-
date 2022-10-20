function Paciente({paciente, setPaciente, eliminarPaciente}){
    const {mascota,propietario,email,fecha,sintomas} = paciente

    const eliminarFormulario=()=>{
       const respuesta = confirm('¿Estás seguro de eliminar este paciente?')
       if(respuesta){
           eliminarPaciente(id)
       }
    }
   return(
       <div className="bg-slate-50 shadow-md mx-5 px-5 rounded-md">
       <p className="font-bold text-gray-700 uppercase ">Nombre: <span className="font-normal normal-case">{mascota}</span></p>
       <p className="font-bold text-gray-700 uppercase ">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
       <p className="font-bold text-gray-700 uppercase ">Email: <span className="font-normal normal-case">{email}</span></p>
       <p className="font-bold text-gray-700 uppercase ">Fecha: <span className="font-normal normal-case">{fecha}</span></p>
       <p className="font-bold text-gray-700 uppercase ">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

       <div>
           <button type="button" className="bg-indigo-500 text-white font-bold uppercase rounded-md px-10 my-3 hover:bg-indigo-700" 
           onClick={()=>setPaciente(paciente)}>Editar</button>
           <button type="button" className="bg-red-700 text-white font-bold uppercase rounded-md px-10 my-3 hover:bg-red-900" 
           onClick={eliminarFormulario}>Eliminar</button>
       </div>
       </div>
       
   )
   
}

export default Paciente;