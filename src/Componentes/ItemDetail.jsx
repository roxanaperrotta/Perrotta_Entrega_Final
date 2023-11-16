import React from 'react'
import { Flex, Box, Card, CardBody, Stack, Heading, Divider, CardFooter, Button, ButtonGroup, Text, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context.jsx/ShoppingCartContext'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const ItemDetail = ({producto}) => {
  
  
 
 
  const {id}=useParams ()
  const {agregarAlCarrito} = useContext (CartContext)


      
  return (
    
         <>
            <Card maxW='sm'>
            <CardBody>
              <Stack mt='6' spacing='3'>
              <Image src={producto.imagen}/>
                <Heading size='md'>{producto.nombre}</Heading>
                <Text>{producto.descripcion}</Text>
                <Text>${producto.precio}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
              <ItemCount producto={producto}/> 
              </ButtonGroup>
             
            </CardFooter>
          </Card>    
        
    </>
  )
  }

export default ItemDetail