import React from 'react'
import Navbar from './Componentes/Navbar'
import ItemListContainer from './Componentes/ItemListContainer'
import Componente from './Componentes/Componente'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Componentes/Cart'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import ItemList from './Componentes/ItemList'






const App = () => {
 
  
  return (
    <div>
     <BrowserRouter>
          <Navbar/>
     
          <Routes>

              <Route exact path='/' element = {<ItemListContainer/>}/>

              <Route exact path='/categoria/:categoria' element = {<ItemListContainer/>}/>

              <Route exact path='/cart' element = {<Cart/>}/>

              <Route exact path='/producto/:id' element = {<ItemDetailContainer/>}/>




          </Routes>
     </BrowserRouter>
    

     
    </div>
  )
}

export default App
