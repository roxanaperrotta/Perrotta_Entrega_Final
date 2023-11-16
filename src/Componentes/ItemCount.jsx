import React from 'react'
import { Flex, Box, Spacer, Card, CardBody, Stack, Heading, Divider, CardFooter, Button, ButtonGroup, Text, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context.jsx/ShoppingCartContext'





const ItemCount = ({producto}) => {

  console.log(producto)
  


  
   
    const {agregarProducto, carrito, cantidad, setCantidad, suma, resta} = useContext(CartContext)
   
    
   
  
       
  return (
    <> 
    <Flex>
        <Box>
    
                <Button variant='solid' bgColor='peachpuff'>
                    <button onClick={resta}>-</button>
                </Button>
        </Box>
        <Divider/>
                <p>{cantidad}</p>
        <Divider/>
        <Box>

                <Button variant='solid' backgroundColor='peachpuff'>
                    <button onClick={suma}>+</button>
                </Button>
        </Box>
        <Box >
               <Button variant='solid' bgColor='black'>
                 <button onClick ={() =>agregarProducto (producto, cantidad)}><h3>Agregar al Carrito</h3></button>
          
               </Button>
               </Box>
        <Divider/>

     
    </Flex>
    </>
  )
}



export default ItemCount 