import React from 'react'
import { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Card, CardBody, Stack, Button, Divider} from '@chakra-ui/react'
import { CartContext } from '../context.jsx/ShoppingCartContext';
import Pedido from './Pedido';
import { Link,  } from 'react-router-dom'

const Form = () => {

    const [nombre, setNombre]=useState("")
    const [email, setEmail]=useState("")
    const [orderId, setOrderId] = useState(null);
    const [showPedido, setShowPedido] = useState(false);

    const {carrito, setCarrito,totalCantidad, totalPrecio , limpiarCantidad, limpiarCarrito} = useContext (CartContext)
  
    const db = getFirestore();

    const handleSubmit = (e)=> {
        e.preventDefault()

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      setShowPedido(true);
     } );
  
        //validacion
        console.log(nombre)
        console.log (email)
        console.log (orderId)
     
    }

    const order ={
      nombre,
      email, 
      orderId
    };                
  
    const ordersCollection=collection(db, "MiOrden")

    const handleVolverInicio = () => {
      history.push('/');
    };  
      
  return (
      <div> 
         <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <Button  variant="solid" bgColor='black' type="submit"><h3>Enviar</h3></Button>
        
        </form>
  
        {orderId && (
        <>
         <Divider />
          <h2>Numero de orden: {orderId}</h2>
         
          {showPedido && <Pedido orderId={orderId} />}
        
          <Button onClick={() =>  handleVolverInicio()} as={Link} to={'/'} variant="solid" bgColor="black">
            <h3>Inicio</h3>
          </Button>
         
  
    
       </>

       
    )
  }
    </div>
  );
  
}

export default Form