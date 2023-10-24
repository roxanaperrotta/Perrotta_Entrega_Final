import React from 'react'
import {useParams } from 'react-router-dom'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Button, ButtonGroup, Text } from '@chakra-ui/react'
import { useState } from 'react'

const ItemDetail = ({productos}) => {

    const {id}= useParams ()

    const filteredProduct = productos.filter((producto) => producto.id == id)

    const [contador, setContador]=useState(0)
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
    <>
    {
      filteredProduct.map((p)=>{
        return(
            <Card maxW='sm'>
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Text>imagen</Text> 
                <Heading size='md'>{p.nombre}</Heading>
                <Text>{p.descripción}</Text>
                <Text>${p.precio}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                  <Button variant='solid' bgColor='salmon'>
                    <button onClick={suma}>+</button>
                  </Button>
              
                  <p>{contador}</p>
                
                  <Button variant='solid' backgroundColor='salmon'>
                     <button onClick={resta}>-</button>
                  </Button>

                  <Button variant='solid' bgColor='cornsilk'>
                     <button onClick={agregar}>Agregar al Carrito</button>
                  </Button>

              </ButtonGroup>

            </CardFooter>
          </Card>
          
        )
      } )
    }

    </>
  )

}

export default ItemDetail