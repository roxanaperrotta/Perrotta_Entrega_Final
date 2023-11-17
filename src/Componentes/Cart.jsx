import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context.jsx/ShoppingCartContext'
import { Link, useParams } from 'react-router-dom'
import {Flex,  Card, CardBody, Stack, Center, Button, Text, Spacer, Divider } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

  const { carrito, totalPrecio, totalCantidad, limpiarCarrito, sacarProducto, limpiarCantidad, Toastify} = useContext (CartContext)


  const handleVolverInicio = () => {
    history.push('/');
  };
 


  if (totalCantidad=== 0) {
    return (
      <div>
        <Flex>
          <Center>
            <Text>No hay productos en el carrito</Text>
            <Button onClick={handleVolverInicio} as={Link} to={'/'}variant='solid' bgColor='black'>
              
                <h3>Comprar</h3>
        
            </Button>
          </Center>
        </Flex>
      </div>
    );
  }

 // console.log(carrito)

 const notify=() => toast("Se quitó el producto del carrito!",
   {position:"top-right", autoClose:2000, hideProgressBar:false, cloeOnclick:true, pauseOnHover:true, draggable: true, progress:undefined, theme:"light"});


  return (
  


   <div>
     <Card maxW='sm'>
        <CardBody className='micard'>
            <Stack mt='6' spacing='3'>
 
   
                 <h1>Carrito</h1>
                     <ul>
                            {carrito.map((p) => (
                                 <li key={p.id}>
      
                                      {p.nombre} - Cantidad: {p.cantidad} - Precio por unidad: ${p.precio} - 
                                      subtotal ${p.precio*p.cantidad} - <img className= "milogo" src={p.imagen}/>
                                     
                                      <Button variant="solid" bgColor='black' onClick={() => {sacarProducto(p.id); notify()}}>
                                      <h3>Quitar producto</h3>
                                      </Button>
                                      <ToastContainer position="top-right" autoClose={2000} limit ={1} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}/> 
            
                                 </li>
          
                             ))}
                              <ToastContainer position="top-right" autoClose={2000} limit ={1} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}/> 
                            <Spacer mt='3' spacing='3'/>
                            <div>
                                 <p>Cantidad de Productos en el CARRITO {totalCantidad}</p>
                                 <h2>Total Pedido ${totalPrecio}</h2>
                            </div>
                            <Divider />
                  <Button onClick={limpiarCantidad} variant='solid' bgColor='black'>
                      <Link to="/" className="Option">
                             <h3>Seguir comprando</h3>
                      </Link>
                  </Button>
                  <Spacer mt='2' spacing='3'/>
                  <Button onClick={() => limpiarCarrito()} variant='solid' bgColor='black'>
                                 <h3>Vaciar Carrito</h3>
                   </Button>
                  <Spacer mt='2' spacing='3'/>
                  <Button  as={Link} to={"/Form"} variant="solid" bgColor='black'>
                            <h3>Finalizar Pedido</h3>
                  </Button>

                     </ul>
            </Stack>
     </CardBody>
  </Card>
</div>
  
  
  )
                            }
  
  


export default Cart