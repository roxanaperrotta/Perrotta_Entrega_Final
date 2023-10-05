import React from 'react'
import Navbar from './Componentes/Navbar'
import ItemListContainer from './Componentes/ItemListContainer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  )
}

export default App
