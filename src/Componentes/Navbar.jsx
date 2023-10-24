import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
<div >
        <Flex>
            <Box p={4} backgroundColor={'peachpuff'}>
              <Link to={"/"}>
               <h2>Ruta 11-Casa de Comidas</h2> 
              </Link>
            </Box>
        <Spacer/>
            <Box>
                <Menu>
                    <MenuButton p= {4} bgColor={'black'}>
                         <p class="pcategoria">Categorías</p>
                    </MenuButton>
                    <MenuList>
                       <MenuItem > 
                          <Link to={`/categoria/${"empanada"}`}>Empanadas
                          </Link>
                        </MenuItem>
                       <MenuItem>
                          <Link to={`/categoria/${"pizza"}`}>Pizzas
                          </Link>
                       </MenuItem>
                       <MenuItem>
                          <Link to={`/categoria/${"tarta"}`}>Tartas 
                          </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        <Spacer/>
            <Box p={4} bgColor={'cornsilk'} >
               <CartWidget/> 
            </Box>
      
         </Flex>  

         </div>
  )
}

export default Navbar