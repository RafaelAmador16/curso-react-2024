
const nombres= ["Rafa", "Rosa", "Alberto", "Lucia"];
const Ejercicio2 = () => {
  return (
    <>
    <ul>
    {
        nombres.map((nombre, index)=>(
         <li key={index}>{nombre}</li>   
        ))
    }
    </ul>
    
    </>
  )
}

export default Ejercicio2