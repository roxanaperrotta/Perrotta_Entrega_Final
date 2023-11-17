import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
<div >
        <Flex>
            <Box p={0} >
              <Link to={"/"}>
                <Image src="../imagenes/logo.PNG" className="milogo"> 
                </Image>
                <h5>Comidas</h5>
              </Link>
            </Box>
        <Spacer/>
            <Box>
                <Menu>
                    <MenuButton p= {4} bgColor={'black'}>
                         <p className="pcategoria">Categorías</p>
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