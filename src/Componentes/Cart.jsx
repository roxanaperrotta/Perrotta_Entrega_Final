import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context.jsx/ShoppingCartContext'
import { Link, useParams } from 'react-router-dom'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Button, ButtonGroup, Text, Image } from '@chakra-ui/react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from './ItemDetail'

const Cart = () => {

  const { carrito, setCarrito, agregarAlCarrito, eliminarDelCarrito, TotalCarrito } = useContext (CartContext)
  



  console.log(carrito)



  return (
  // TotalCarrito ()  !== 0 ?

    <div>
      <h2>contenido del carrito</h2>
     
     <ul>
        {carrito.map((producto)=> (
          <li key={producto.id}>
            {producto.nombre} - cantidad: {producto.cantidad} - Precio por unidad : ${producto.precio} {""}
         
          </li>
        ))}
      </ul>
    {/*} <>
            <Card maxW='sm'>
            <CardBody>
              <Stack mt='6' spacing='3'>
              <Image src={producto.imagen}/>
                <Heading size='md'>{producto.nombre}</Heading>
                <Text>{producto.descripción}</Text>
                <Text>${producto.precio}</Text>
             
              </Stack>
            </CardBody>
         
          </Card>    

          
          </>
        */}

     </div>
    // : <h1>Carrito vacio</h1>
  )
 

}

export default Cart