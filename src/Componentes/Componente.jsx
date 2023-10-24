import React from 'react'
import { useState, useEffect } from 'react'

const Componente = ({tomarValor, isAdmin, user, arr}) => {

    const [mensaje, setMensaje]=useState("Mensaje Inicial")
    const [contador, setContador]=useState(0)

    useEffect(()=>{
        console.log("Me estoy ejecutando")
    }, [contador])
    const suma=()=>{
        contador<10? setContador(contador+1):alert("No hay stock")
       }
     
       const resta=()=>{
         contador>0? setContador(contador-1):alert("Mínimo alcanzado")
       }
     
       const agregar=()=>{
         alert(`Productos agregados ${contador}`)
       }

    return (
    <div>
        <p>{mensaje}</p>
        <button onClick={()=> setMensaje("Mensaje Modificado")}>Cambiar mensaje</button>
        <p>{contador}</p>
        <button onClick={suma}>Agregar</button>
        <button onClick={resta}>Quitar</button>
        <button onClick={agregar}>Agregar al Carrito</button>
    </div>
  )
}

export default Componente