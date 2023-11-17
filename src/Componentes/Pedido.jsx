import {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context.jsx/ShoppingCartContext';
import {Flex,  Card, CardBody, Stack, Center, Button, Text, Divider ,Spacer } from '@chakra-ui/react'


const Pedido = ({orderId}) => {
  
const {carrito, totalPrecio, totalCantidad, } = useContext (CartContext)


return (
  <div>
  <Card maxW='sm'>
     <CardBody className='micard'>
         <Stack mt='1' spacing='3'>

              <h2><strong>Detalle del Pedido </strong></h2>
                  <ul>
                     <li> <p><strong>Numero de orden:</strong> {orderId}</p></li>
                     <li><strong>Productos</strong></li>
                         {carrito.map((p) => (
                         
                           
                              <li key={p.id}>
                                
                                    <p>{p.cantidad} {p.nombre} - Precio por unidad: ${p.precio} - Precio por {p.cantidad} ${p.precio*p.cantidad} </p>
                              </li>  ))}    
                  </ul>
                  <Spacer mt='1' spacing='3'/>
                  <ul>

                              <li><h2><strong>Cantidad de Productos </strong>{totalCantidad}</h2></li>
                              <li><h2><strong>Importe</strong> ${totalPrecio}</h2></li>
                  </ul>
        
              
                 
         </Stack>
  </CardBody>
</Card>

</div>

  )
}

export default Pedido