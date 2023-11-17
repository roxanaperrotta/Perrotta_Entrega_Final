import React from 'react'
import { Flex, Box, Spacer, Divider, Button, ButtonGroup, Text, Image, Toast } from '@chakra-ui/react'
import{Link} from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context.jsx/ShoppingCartContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const ItemCount = ({producto}) => {

  //console.log(producto)

    const {agregarProducto, carrito, cantidad, setCantidad, suma, resta, limpiarCantidad} = useContext(CartContext)
   
   const notify=() => toast("Se añadió su producto al carrito!",
   {position:"top-right", autoClose:2000, hideProgressBar:false, cloeOnclick:true, pauseOnHover:true, draggable: true, progress:undefined, theme:"light", bgColor:"peach"});

   
  
       
  return (
    <> 
    <Flex>
        <Box>
    
                <Button mt='1' onClick={resta} variant='solid' bgColor='peachpuff'>
                    -
                </Button>
        </Box>
        <Spacer/>
                <p>{cantidad}</p>
     
        <Box>

                <Button mt='1' onClick={suma} variant='solid' backgroundColor='peachpuff'>
                  +
                </Button>
        </Box>
        <Box >
               <Button  mt='1' spacing='3' onClick ={() =>{agregarProducto (producto, cantidad); notify() }} variant='solid' bgColor='black'>
               <h3>Agregar al Carrito</h3>
               </Button>
              
            <ToastContainer position="top-right" autoClose={2000} limit ={1} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}/> 
            
            <Button  as={Link} to={'/Cart'} variant="solid" bgColor="black">
            <h3>Ver Carrito</h3>
          </Button>

          <Button onClick={limpiarCantidad} variant='solid' bgColor='black'>
                      <Link to="/" className="Option">
                             <h3>Seguir comprando</h3>
                      </Link>
                  </Button>
          
        </Box>

 </Flex>

    </>
    
  )
  
}



export default ItemCount 