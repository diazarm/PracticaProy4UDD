import React, {useState} from 'react'


export const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre:"",
        telefono:"",
        correo:"",
        personas:"",
        fecha:"",
        hora:"", 
    })



    const handleChange = (event)=>{
        setDatos({...datos, [event.target.name]:event.target.value})
    }
    
    // Creamos una función, proceso asincrono, para manejar el envío del formulario
    const handleSubmit = async (event) => {
      // Evitamos el comportamiento por defecto del formulario
      event.preventDefault();
      // Intentar conectarse a la colección de bbdd, y agrega nuevo doc
      try {
        await firestoreDB.collection("reservas").add(datos)
        alert("Reserva guardada")
      } catch (error){
        alert("No se pudo guardar la reserva")
        console.log(error)
      }
     
    };

  return (
    <div className='formContainer'>
        Formulario
        <form>
            <input type="text" name="nombre" onChange={handleChange} value={datos.nombre} placeholder="Ej: Juan Gabriel"/>
            <input type="tel" name="telefono" onChange={handleChange} value={datos.telefono} placeholder="Ej: 9 8765 4321" pattern="[9]{1}-[0-9]{4}-[0-9]{4}"/>
            <input type="email" name="correo" onChange={handleChange} value={datos.correo} placeholder="Ej: Juan@Gabriel.mx"/>
            <input type="number" name="personas" onChange={handleChange} value={datos.personas} placeholder="Ej: 5 " min = {2} max = {6} />
            <input type="date" name="fecha" onChange={handleChange} value={datos.fecha} placeholder="Ej: 14-12-2023"/>
            <select name="hora" onChange={handleChange} value={datos.hora}>
             <option>14:00hrs</option>
             <option>15:00hrs</option>
             <option>16:00hrs</option>
             <option>17:00hrs</option>
             <option>18:00hrs</option>
             <option>19:00hrs</option>
             <option>20:00hrs</option>
             <option>21:00hrs</option>
             </select>
             <button type='submit'>Reservar</button>
        </form>
    </div>
  )
}
