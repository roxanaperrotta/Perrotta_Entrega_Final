import React from 'react'
import Navbar from './Componentes/Navbar'
import ItemListContainer from './Componentes/ItemListContainer'
import Componente from './Componentes/Componente'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Componentes/Cart'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import ItemList from './Componentes/ItemList'
import './App.css'
import Form from './Componentes/Form'
import { ShoppingCartProvider } from './context.jsx/ShoppingCartContext'
import Rendering from './Componentes/Rendering'



const App = () => {
 
  
  return (
    <div>
    
  
     
     
        <BrowserRouter>
     <ShoppingCartProvider>      
         <Navbar/>
     
              <Routes>

                  <Route exact path='/' element = {<ItemListContainer/>}/>

                  <Route exact path='/categoria/:categoria' element = {<ItemListContainer/>}/>

                 <Route exact path='/cart' element = {<Cart/>}/>

                 <Route exact path='/productos/:id' element = {<ItemDetailContainer/>}/>

          </Routes>
     </ShoppingCartProvider>       
          </BrowserRouter>
   
   {/* <>
    <Form/>
    </>
*/}
     
    </div>
  )
}

export default App
