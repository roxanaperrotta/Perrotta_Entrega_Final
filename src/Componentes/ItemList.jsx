import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
   // console.log(productos)
  return (
    <div>
        { productos.map((p)=>{
            return(
                <Item
                key={p.id}
                id={p.id}
                imagen={p.imagen}
                nombre={p.nombre}
                descripcion={p.descripcion}
                precio={p.precio}
                />
            )
        })
    }
    </div>
  )
}

export default ItemList