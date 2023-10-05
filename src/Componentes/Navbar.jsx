import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, } from '@chakra-ui/react'

const Navbar = () => {
  return (
  
        <Flex>
            <Box p={4} backgroundColor={'cornsilk'}>
               <h3>Ruta 11-Casa de Comidas</h3> 
            </Box>
            
            <Spacer />

            <Box>
                <Menu>
                    <MenuButton p= {4} bgColor={'salmon'}>
                         Menu
                    </MenuButton>
                    <MenuList>
                       <MenuItem>Nosotros</MenuItem>
                       <MenuItem>Productos</MenuItem>
                       <MenuItem>Promociones</MenuItem>
                       <MenuItem>Pedidos</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            <Spacer/>
            
            <Box p={4} bgColor={'cornsilk'} >
               <CartWidget/>  
            </Box>
        </Flex> 
           
   
  )
}

export default Navbar