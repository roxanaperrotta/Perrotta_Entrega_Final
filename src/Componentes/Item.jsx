import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Button, ButtonGroup, Image, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({nombre, imagen, id}) => {
  return (
    <div>
        <Card  maxW='sm'>
           <CardBody>
                <Stack mt='6' spacing='3'>
      
                     <Image src={imagen}/>
    
                     <Heading className="headingh2" size='md'>{nombre}</Heading>
                 </Stack>
           </CardBody>
         <Divider/>
            <CardFooter>
   
            <ButtonGroup spacing='2'>
               <Button variant='solid' bgColor='black'>
                  <Link to={`/productos/${id}`}>
                       <h3>Ver detalle</h3> 
                  </Link>
                </Button> 
      
            </ButtonGroup>

            </CardFooter>
         </Card>
    </div>
  )
}

export default Item