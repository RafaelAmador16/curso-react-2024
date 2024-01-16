import { useState } from 'react'

const Ejercicio1 = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false)
function handleClick (){
    setIsLoggedIn(!isLoggedIn);
}


  return (
    <>
    <p>{isLoggedIn ? "Bienvenido": "Por favor inicia sesion"}</p>
    <button onClick={handleClick}>{isLoggedIn ? "Logout": "Login"}</button>
    </>
  )
}

export default Ejercicio1