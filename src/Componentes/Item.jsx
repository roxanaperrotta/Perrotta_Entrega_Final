import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({nombre, imagen, id}) => {
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Image src="../imagenes/${imagen}" >
      </Image>
      <Heading size='md'>{nombre}</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
       <Link to={`/producto/${id}`}>
        Ver detalle
        </Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default Item