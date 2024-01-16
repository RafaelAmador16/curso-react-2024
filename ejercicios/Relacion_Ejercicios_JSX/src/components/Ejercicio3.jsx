

const Ejercicio3 = () => {
  function handleEnviarMensaje(){
    console.log("Has presionado el boton");  
  }

  return (
    <>
    <button onClick={handleEnviarMensaje}>Manda el mensaje a la consola</button>
    </>
  )
}

export default Ejercicio3